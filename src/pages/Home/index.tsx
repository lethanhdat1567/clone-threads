/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "@/components/post";
import { postService } from "@/service/postService";
import { Spinner } from "@/components/ui/spinner";

function Home() {
    const [posts, setPosts] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const loadPosts = async () => {
        console.log("fetch");

        try {
            const res = await postService.getFeed(page, 10, "for_you");

            const newPosts = res.data;
            const pagination = res.pagination;

            setPosts((prev) => [...prev, ...newPosts]);

            if (pagination.current_page >= pagination.last_page) {
                setHasMore(false);
            } else {
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={loadPosts}
            scrollableTarget="scrollableDiv"
            hasMore={hasMore}
            loader={
                <p className="flex items-center justify-center gap-2 py-4">
                    <Spinner /> Loading...
                </p>
            }
        >
            <div className="space-y-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </InfiniteScroll>
    );
}

export default Home;
