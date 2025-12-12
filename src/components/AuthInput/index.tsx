/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={`bg-muted w-full rounded-lg p-4 text-sm ${className || ""}`}
                {...props}
            />
        );
    },
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
