import z from "zod";

// Login Schema
export const loginSchema = z.object({
    login: z.string().min(2, "Username phải có ít nhất 2 ký tự").max(50),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});
