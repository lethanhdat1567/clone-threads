import FormResetPassword from "@/pages/ResetPassword/FormResetPassword";
import { Link } from "react-router-dom";

function ResetPassword() {
    return (
        <div className="text-center">
            {/* ✅ Title */}
            <h2 className="mb-2 text-lg font-bold">Create new password</h2>

            {/* ✅ Description */}
            <p className="text-muted-foreground mb-4 text-sm">
                Please enter your new password below
            </p>

            {/* ✅ Form */}
            <div className="w-screen px-4 sm:w-100 sm:px-0">
                <FormResetPassword />
            </div>

            {/* ✅ Back to login */}
            <p className="text-muted-foreground mt-4 text-sm">
                Back to{" "}
                <Link
                    to="/login"
                    className="text-foreground font-semibold hover:underline"
                >
                    Log in
                </Link>
            </p>
        </div>
    );
}

export default ResetPassword;
