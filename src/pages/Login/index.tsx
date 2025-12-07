import FormLogin from "@/pages/Login/FormLogin";

function Login() {
    return (
        <div className="text-center">
            <h2 className="text-md mb-4 font-bold">
                Log in with your Instagram account
            </h2>
            <div>
                <FormLogin />
            </div>
            <p className="text-muted-foreground mt-4 cursor-pointer text-sm">
                Forgot password?
            </p>
        </div>
    );
}

export default Login;
