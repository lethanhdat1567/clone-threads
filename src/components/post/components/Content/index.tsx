import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Content() {
    return (
        <div className="flex-1">
            <p className="text-md mb-2">
                Mo Salah had a lot to say after being benched for Liverpool's
                3-3 draw with Leeds
            </p>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img
                            className="h-[280px] w-[223px] rounded-xl object-cover"
                            src="https://images.unsplash.com/photo-1522008224169-e5992bed5fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5wbHVnZ2VkfGVufDB8fDB8fHww"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[280px] w-[223px] rounded-xl object-cover"
                            src="https://images.unsplash.com/photo-1522008224169-e5992bed5fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5wbHVnZ2VkfGVufDB8fDB8fHww"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[280px] w-[223px] rounded-xl object-cover"
                            src="https://images.unsplash.com/photo-1522008224169-e5992bed5fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5wbHVnZ2VkfGVufDB8fDB8fHww"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[280px] w-[223px] rounded-xl object-cover"
                            src="https://images.unsplash.com/photo-1522008224169-e5992bed5fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5wbHVnZ2VkfGVufDB8fDB8fHww"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[280px] w-[223px] rounded-xl object-cover"
                            src="https://images.unsplash.com/photo-1522008224169-e5992bed5fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5wbHVnZ2VkfGVufDB8fDB8fHww"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Content;
