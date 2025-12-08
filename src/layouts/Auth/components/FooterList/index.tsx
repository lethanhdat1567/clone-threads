function FooterList() {
    return (
        <footer className="absolute bottom-2 z-10 w-full">
            <div className="container mx-auto px-4 py-6">
                <ul className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
                    <li>© 2025</li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Threads Terms
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Cookies Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Report a problem
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default FooterList;
