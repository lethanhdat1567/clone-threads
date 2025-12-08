/* eslint-disable @typescript-eslint/no-empty-object-type */
interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function AuthInput({ className, ...props }: AuthInputProps) {
    return (
        <input
            className={`bg-muted w-[370px] rounded-lg p-4 text-sm ${className || ""}`}
            {...props}
        />
    );
}

export default AuthInput;
