import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import AuthInput from "@/components/AuthInput";
import { authApi } from "@/https/auth";

// ✅ Schema chỉ còn EMAIL
const formSchema = z.object({
    email: z.string().email("Invalid email address"),
});

function FormForgotPassword() {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: any) {
        try {
            setLoading(true);

            await authApi.forgotPassword({ email: values.email });

            localStorage.setItem("reset_password", values.email);

            setSuccess(true);
        } catch (error: any) {
            const errors = error?.response?.data?.errors;
            if (errors) {
                console.log(errors);

                Object.keys(errors).forEach((key) => {
                    form.setError(key as any, {
                        type: "server",
                        message: errors[key][0],
                    });
                });
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* ✅ Success message */}
            {success ? (
                <div className="mb-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-600">
                    The password reset link has been sent to your email.
                </div>
            ) : (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* ✅ Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <AuthInput
                                            placeholder="Email address"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* ✅ Button */}
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg py-6 font-bold"
                        >
                            {loading ? "Sending..." : "Reset password"}
                        </Button>
                    </form>
                </Form>
            )}
        </>
    );
}

export default FormForgotPassword;
