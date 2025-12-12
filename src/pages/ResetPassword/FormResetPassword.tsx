import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import AuthInput from "@/components/AuthInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { authService } from "@/service/authService";

// Schema validation (English)
const formSchema = z
    .object({
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type FormValues = z.infer<typeof formSchema>;

function FormResetPassword() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [validating, setValidating] = useState(true);
    const [tokenValid, setTokenValid] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    // Validate token when page loads
    useEffect(() => {
        const validateToken = async () => {
            const tokenParam = searchParams.get("token");

            if (!tokenParam) {
                toast.error("Invalid reset link");
                setValidating(false);
                return;
            }

            setToken(tokenParam);

            const res = await authService.validateToken(tokenParam);
            console.log(res);
            if (res.data.valid) {
                setTokenValid(true);
            } else {
                setTokenValid(false);
            }
            setValidating(false);
        };

        validateToken();
    }, [searchParams]);

    async function onSubmit(values: FormValues) {
        const email = localStorage.getItem("reset_password");

        if (!email) return;

        if (!token) {
            toast.error("Invalid token");
            return;
        }

        try {
            setLoading(true);

            await authService.resetPassword({
                token: token,
                email: email,
                password: values.password,
                password_confirmation: values.confirmPassword,
            });

            toast.success("Your password has been successfully reset!");

            navigate("/login", {
                state: {
                    message:
                        "Password reset successful. Please log in with your new password.",
                },
            });
        } catch (errors: any) {
            Object.keys(errors).forEach((key) => {
                form.setError(key as any, {
                    type: "server",
                    message: errors[key][0],
                });
            });
        } finally {
            setLoading(false);
        }
    }

    // Token validating UI
    if (validating) return <p>Validating your reset link...</p>;

    // Invalid token UI
    if (!tokenValid)
        return (
            <p className="text-red-500">This link is invalid or has expired.</p>
        );

    // Valid token → show reset form
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <AuthInput
                                    placeholder="New password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <AuthInput
                                    placeholder="Confirm new password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg py-6 font-bold"
                >
                    {loading ? "Processing..." : "Reset Password"}
                </Button>
            </form>
        </Form>
    );
}

export default FormResetPassword;
