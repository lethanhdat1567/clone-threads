"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import AuthInput from "@/components/AuthInput";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { authService } from "@/service/authService";
import { loginSchema } from "@/schema/auth/login.schema";
import { useDispatch } from "react-redux";
import { setCredentials, setUser } from "@/store/slices/auth";
import { useLocation, useNavigate } from "react-router-dom";

type LoginPayload = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [verified, setVerified] = useState(false);

    // Form Init
    const form = useForm<LoginPayload>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            login: "",
            password: "",
        },
    });

    useEffect(() => {
        if (location.state?.message) {
            toast.success(location.state.message);
        }
    }, [location.state]);

    useEffect(() => {
        if (location.state?.verified) {
            setVerified(true);
        }
    }, [location.state]);

    // Submit
    async function onSubmit(values: LoginPayload) {
        if (loading) return;

        setLoading(true);
        try {
            const res = await authService.login(values);
            const access_token = res.data.access_token;
            const refresh_token = res.data.refresh_token;

            dispatch(
                setCredentials({
                    accessToken: access_token,
                    refreshToken: refresh_token,
                }),
            );

            const userData = await authService.getUserInfo();
            console.log(userData.data);

            dispatch(setUser(userData.data));
            navigate("/");
            toast.success("Đăng nhập thành công!");
        } catch (error: any) {
            toast.error("Đăng nhập thất bại!");

            if (!error?.response?.data?.success) {
                const errors = error?.response?.data?.errors;

                if (errors) {
                    const keyMap: Record<string, string> = {
                        login: "username",
                    };

                    Object.keys(errors).forEach((key) => {
                        const formKey = keyMap[key] || key;

                        form.setError(formKey as any, {
                            type: "server",
                            message: errors[key][0],
                        });
                    });
                } else {
                    form.setError("password", {
                        type: "server",
                        message: "Tên đăng nhập hoặc mật khẩu không chính xác!",
                    });
                }
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-auto max-w-md space-y-6">
            {verified && (
                <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                    Your account has been successfully verified.
                    <br />
                    Please log in to continue.
                </div>
            )}

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    {/* Username */}
                    <FormField
                        control={form.control}
                        name="login"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <AuthInput
                                        placeholder="Username, phone or email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <AuthInput
                                        placeholder="Password"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full py-6 text-base font-bold"
                        disabled={loading}
                    >
                        {loading ? <Spinner /> : "Login"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
