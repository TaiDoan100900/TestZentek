import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import arrowLeft from "../../assets/svgs/ArrowLeftBold.svg";
import "swiper/css";
import "swiper/css/navigation";

interface NFTCardProps {
  id: number;
  name: string;
  image: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ name, image }) => (
  <div className="rounded-[7px] overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer md:rounded-xl">
    <div className="w-auto h-[140px] rounded-[7px] overflow-hidden md:rounded-xl md:h-[245px]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  </div>
);

export interface NFTCollectionSectionProps {
  collections: NFTCardProps[];
}

const NFTCollectionSection: React.FC<NFTCollectionSectionProps> = ({
  collections,
}) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        navigation={{
          nextEl: ".nft-collection-swiper-button-next",
          prevEl: ".nft-collection-swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
        loop
        className="relative"
      >
        {collections.map((nft) => (
          <SwiperSlide key={nft.id}>
            <NFTCard {...nft} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute top-0 right-0 flex space-x-2">
        <button className="nft-collection-swiper-button-prev w-8 h-8 bg-[#383A42] hover:bg-gray-700 cursor-pointer rounded-lg flex items-center justify-center transition-colors md:rounded-xl md:w-10 md:h-10">
          <img src={arrowLeft} alt="prev" className="w-6 h-6" />
        </button>
        <button className="nft-collection-swiper-button-next w-8 h-8 bg-[#383A42] hover:bg-gray-700 cursor-pointer rounded-lg flex items-center justify-center transition-colors md:rounded-xl md:w-10 md:h-10">
          <img src={arrowLeft} alt="prev" className="w-6 h-6 rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default NFTCollectionSection;
