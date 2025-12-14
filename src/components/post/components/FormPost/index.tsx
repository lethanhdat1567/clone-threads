import Content from "@/components/post/components/FormPost/components/Content";
import Heading from "@/components/post/components/FormPost/components/Heading";
import ToolbarActions from "@/components/post/components/FormPost/components/ToolbarActions";

type Props = {
    topic: string;
    setTopic: any;
    content: string;
    setContent: any;
};

function FormPost({ topic, setTopic, content, setContent }: Props) {
    return (
        <div className="w-full">
            <Heading topic={topic} setTopic={setTopic} />
            <Content content={content} setContent={setContent} />
            <ToolbarActions />
        </div>
    );
}

export default FormPost;
