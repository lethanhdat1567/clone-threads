function HeadingTitle() {
    return (
        <div className="bg-muted text-md sticky top-0 z-50 flex h-(--header-h) items-center justify-center font-medium">
            Header
            <div className="absolute -bottom-6 -left-3 h-10 w-10">
                <div className="absolute right-0 bottom-0 h-6 w-7 rounded-tl-4xl border-t border-l bg-transparent shadow-[-10px_-3px_0_0_#f5f5f5]"></div>
            </div>
            <div className="absolute right-0 -bottom-6 h-10 w-10">
                <div className="absolute right-0 bottom-0 h-6 w-7 rounded-tr-4xl border-t border-r bg-transparent shadow-[10px_-3px_0_0_#f5f5f5]"></div>
            </div>
        </div>
    );
}

export default HeadingTitle;
