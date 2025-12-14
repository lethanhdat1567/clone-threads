import FormLogin from "@/pages/Login/FormLogin";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="w-screen px-4 text-center sm:w-100 sm:px-0">
            <h2 className="text-md mb-4 font-bold">
                Log in with your Instagram account
            </h2>
            <div>
                <FormLogin />
            </div>
            <Link to={"/forgot-password"}>
                <p className="text-muted-foreground mt-4 cursor-pointer text-sm">
                    Forgot password?
                </p>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm">
                Don’t have an account?{" "}
                <Link
                    to={"/register"}
                    className="text-foreground font-semibold hover:underline"
                >
                    Sign up
                </Link>
            </p>
        </div>
    );
}

export default Login;
