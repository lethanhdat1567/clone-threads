import FormRegister from "@/pages/Register/FormRegister";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="text-center">
            <h2 className="text-md mb-4 font-bold">Register a new account</h2>

            <div>
                <FormRegister />
            </div>

            <p className="text-muted-foreground mt-4 text-sm">
                Already have an account?{" "}
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

export default Register;
