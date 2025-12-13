import Content from "@/components/post/components/FormPost/components/Content";
import Heading from "@/components/post/components/FormPost/components/Heading";
import ToolbarActions from "@/components/post/components/FormPost/components/ToolbarActions";

function FormPost() {
    return (
        <div className="w-full">
            <Heading />
            <Content />
            <ToolbarActions />
        </div>
    );
}

export default FormPost;
