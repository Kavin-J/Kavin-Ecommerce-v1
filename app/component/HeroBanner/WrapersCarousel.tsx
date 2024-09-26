import React, { PropsWithChildren } from "react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const WrapersCarousel = (props: PropsWithChildren) => {
  return (
    <div className="flex h-full w-full">
      <Swiper
        effect="fade"
        speed={1000}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
      >
        {React.Children.map(props.children, (child, index) => (
          <SwiperSlide key={index} className="">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WrapersCarousel;
