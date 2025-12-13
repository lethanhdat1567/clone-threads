"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "lodash.debounce";

import { registerSchema } from "@/schema/auth/register.schema";

import AuthInput from "@/components/AuthInput";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { authService, type RegisterPayload } from "@/service/authService";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export default function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const [registered, setRegistered] = useState(false);

    // Form Init
    const form = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    // Check debounce value
    const watchUsername = form.watch("username");
    const watchEmail = form.watch("email");

    const debouncedValidate = debounce(
        async (field: "username" | "email", value: string) => {
            if (!value) return;

            try {
                if (field === "email") {
                    await authService.validateEmail({ email: value });
                } else if (field === "username") {
                    await authService.validateUsername({ username: value });
                }

                form.clearErrors(field);
            } catch (error: any) {
                if (!error?.response?.data?.success) {
                    const errors = error?.response?.data?.errors;
                    if (errors) {
                        Object.keys(errors).forEach((key) => {
                            form.setError(key as any, {
                                type: "server",
                                message: errors[key][0],
                            });
                        });
                    }
                }
            }
        },
        700,
    );

    // Watch username
    useEffect(() => {
        debouncedValidate("username", watchUsername);
        return () => debouncedValidate.cancel();
    }, [watchUsername]);

    // Watch email
    useEffect(() => {
        debouncedValidate("email", watchEmail);
        return () => debouncedValidate.cancel();
    }, [watchEmail]);

    // Submit
    async function onSubmit(values: RegisterPayload) {
        if (loading) return;

        setLoading(true);
        try {
            await authService.register(values);
            setRegistered(true);
            toast.success("Register successfully!");
        } catch (error: any) {
            toast.error("Error!");
            if (!error?.response?.data?.success) {
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
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-auto max-w-md space-y-6">
            {registered && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    We’ve sent a verification link to your email address.
                    <br />
                    Please check your inbox to verify your account.
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
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <AuthInput
                                        placeholder="Display name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email */}
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

                    {/* Confirm Password */}
                    <FormField
                        control={form.control}
                        name="password_confirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <AuthInput
                                        placeholder="Confirm password"
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
                        {loading ? <Spinner /> : "Register"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
