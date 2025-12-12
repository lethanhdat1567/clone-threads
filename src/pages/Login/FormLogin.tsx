"use client";

import { useState } from "react";
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
import { authApi } from "@/https/auth";
import { loginSchema } from "@/schema/auth/login.schema";
import { useDispatch } from "react-redux";
import { setCredentials, setUser } from "@/store/slices/auth";
import { useNavigate } from "react-router-dom";

type LoginPayload = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Form Init
    const form = useForm<LoginPayload>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            login: "",
            password: "",
        },
    });

    // Submit
    async function onSubmit(values: LoginPayload) {
        if (loading) return;

        setLoading(true);
        try {
            const res = await authApi.login(values);
            const access_token = res.data.access_token;
            const refresh_token = res.data.refresh_token;

            dispatch(
                setCredentials({
                    accessToken: access_token,
                    refreshToken: refresh_token,
                }),
            );

            const userData = await authApi.getUserInfo();
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
                                        placeholder="Mật khẩu"
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
                        {loading ? <Spinner /> : "Đăng nhập"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
