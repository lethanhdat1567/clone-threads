import FollowItem from "@/pages/Activity/components/FollowItem";
import PostItem from "@/pages/Activity/components/PostItem";

function Activity() {
    return (
        <div className="p-4">
            <FollowItem />
            <PostItem />
            <FollowItem />
            <PostItem />
            <FollowItem />
            <PostItem />
        </div>
    );
}

export default Activity;
