import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SlideSection.css";

interface SlideProps {
  image: string;
  imageMobile: string;
}

const Slide: React.FC<SlideProps> = ({ image, imageMobile }) => (
  <div>
    <img
      src={image}
      alt=" Slide"
      className="hidden w-full h-[450px] object-cover object-center md:block"
    />
    <img src={imageMobile} alt="Slide Mobile" className="w-full h-[180px] object-cover object-center md:hidden" />
  </div>
);

export interface SlideSectionProps {
  slides: SlideProps[];
}

const SlideSection: React.FC<SlideSectionProps> = ({ slides }) => {
  return (
    <section className="max-w-container relative overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".slide-swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={slides.length > 1}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="slide-swiper-pagination absolute bottom-3 w-full z-30"></div>
    </section>
  );
};

export default SlideSection;
