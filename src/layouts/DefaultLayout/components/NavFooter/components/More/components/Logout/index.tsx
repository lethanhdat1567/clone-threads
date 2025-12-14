import { authService } from "@/service/authService";
import { logout } from "@/store/slices/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await authService.logout();
        } catch (error) {
            console.log(error);
        } finally {
            // Force logout
            dispatch(logout());
            navigate("/login");
            toast.success("Logout successfully!");
        }
    }

    return (
        <div className="p-2" onClick={handleLogout}>
            <div className="text-md w-full cursor-pointer items-center justify-between rounded-sm p-3 font-medium text-red-600 transition hover:bg-red-200">
                Log out
            </div>
        </div>
    );
}

export default Logout;
