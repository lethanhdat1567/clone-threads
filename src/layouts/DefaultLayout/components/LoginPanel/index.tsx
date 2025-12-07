import { Instagram } from "lucide-react";

function LoginPanel() {
    return (
        <div className="bg-accent sticky top-[60px] mt-[60px] w-[340px] rounded-2xl border p-6 text-center">
            <div>
                <h2 className="mb-4 text-lg font-bold">
                    Log in or sign up for Threads
                </h2>
                <p className="text-muted-foreground text-sm">
                    See what people are talking about and join the conversation.
                </p>
                <div className="bg-background my-5 flex items-center gap-4 rounded-2xl p-5">
                    <Instagram />
                    <span className="text-md cursor-pointer font-medium">
                        Continue with Instagram
                    </span>
                </div>
                <p className="text-md text-muted-foreground cursor-pointer">
                    Log in with username instead
                </p>
            </div>
        </div>
    );
}

export default LoginPanel;
