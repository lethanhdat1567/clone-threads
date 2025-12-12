import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Post } from "@/https/post";

function Content({ post }: { post: Post }) {
    if (!post) return;

    return (
        <div className="flex-1">
            <p className="text-md mb-2">{post.content}</p>
            {post.media_urls.length > 0 && (
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={4}
                        onSlideChange={() => console.log("slide change")}
                    >
                        {post.media_urls.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img
                                        className="h-[280px] w-[223px] rounded-xl object-cover"
                                        src={item}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

export default Content;
