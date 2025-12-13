import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { authService } from "@/service/authService";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const verify = async () => {
            const token = searchParams.get("token");

            if (!token) {
                setError("This link is invalid or has expired.");
                setLoading(false);
                return;
            }

            try {
                await authService.verifyEmail(token);

                navigate("/login", {
                    state: { verified: true },
                    replace: true,
                });
            } catch (e) {
                setError("This link is invalid or has expired.");
                setLoading(false);
            }
        };

        verify();
    }, [searchParams, navigate]);

    // ⏳ Loading
    if (loading && !error) {
        return (
            <div className="flex flex-col items-center justify-center space-y-4">
                <Spinner />
                <p className="text-muted-foreground text-sm">
                    Verifying your email...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center space-y-6">
                <p className="text-sm font-medium text-red-500">{error}</p>

                <Button onClick={() => navigate("/login")} className="w-full">
                    Go to login
                </Button>
            </div>
        );
    }

    // Success → redirected
    return null;
}

export default VerifyEmail;
