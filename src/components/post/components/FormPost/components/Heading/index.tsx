import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {
    topic: string;
    setTopic: any;
};

function Heading({ topic, setTopic }: Props) {
    const user = useSelector((state: any) => state.auth.user);

    return (
        <div className="flex items-center gap-2">
            <h2 className="text-[14px] font-semibold">{user.name}</h2>
            <ChevronRight size={14} />
            <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Add a topic"
                className="focus:border-b-muted w-42.5 border-b-2 border-b-transparent text-sm outline-0"
            />
        </div>
    );
}

export default Heading;
