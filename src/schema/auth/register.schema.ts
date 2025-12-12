import * as yup from "yup";

export const registerSchema = yup.object({
    username: yup
        .string()
        .min(2, "Display name must be at least 2 characters")
        .required("Display name is required"),

    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),

    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),

    password_confirmation: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .required("Please confirm your password"),
});

export type RegisterSchemaType = yup.InferType<typeof registerSchema>;
