import FormForgotPassword from "@/pages/ForgotPassword/FormForgotPassword";
import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <div className="text-center">
            <h2 className="text-md mb-2 font-bold">Forgot your password?</h2>

            <p className="text-muted-foreground mb-4 text-sm">
                Enter your email to receive a password reset link
            </p>

            <div>
                <FormForgotPassword />
            </div>

            <p className="text-muted-foreground mt-4 text-sm">
                Back to{" "}
                <Link
                    to={"/login"}
                    className="font-semibold text-black hover:underline"
                >
                    Log in
                </Link>
            </p>
        </div>
    );
}

export default ForgotPassword;
