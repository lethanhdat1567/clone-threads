function Heading() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold">Le Thanh Dat</h1>
                <h3 className="text-[15px]">datlee.th</h3>
            </div>
            <img
                src={"https://github.com/shadcn.png"}
                className="h-[84px] w-[84px] rounded-full object-cover"
            />
        </div>
    );
}

export default Heading;
