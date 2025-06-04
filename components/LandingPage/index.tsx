import React from "react";
import SlideSection from "../SlideSection";
import FeaturesBar from "../FeaturesBar";
import NFTCollectionSection from "../NFTCollectionSection";
import NFTDropCalendarSection from "components/NFTDropCalendarSection";
import { slides, nftCollections, nftDropCalendar } from "./data";
import hotNFT from "../../assets/images/HotNFT.png";
import promotion from "../../assets/images/Promotion.png";

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Slide Section */}
      <SlideSection slides={slides} />

      {/* Features Bar */}
      <FeaturesBar />

      <div className="max-w-section px-4 py-10 sm:px-8 lg:px-0 md:py-20">
        {/* NFT Collection Section */}
        <section className="relative mb-10 md:mb-20">
          <div className="text-left fade-in">
            <h2 className="text-2xl font-black text-primary mb-2 md:text-[32px]">
              NEW NFT COLLECTIONS
            </h2>
          </div>
          <NFTCollectionSection collections={nftCollections} />
        </section>

        <div className="flex flex-col lg:flex-row md:gap-6">
          {/* NFT DROPS CALENDAR */}
          <section className="relative mb-10 w-full overflow-hidden lg:mb-0 lg:w-1/2">
            <div className="text-left fade-in">
              <h2 className="text-2xl font-black text-primary mb-2 md:text-[32px]">
                NFT DROPS CALENDAR
              </h2>
            </div>
            <NFTDropCalendarSection nftDropCalendar={nftDropCalendar} />
          </section>

          <div className="flex gap-4 md:gap-6 w-full lg:w-1/2">
            {/* HOT NFT */}
            <section className="relative w-1/2">
              <div className="text-left fade-in">
                <h2 className="text-2xl font-black text-primary mb-2 md:text-[32px]">
                  HOT NFT
                </h2>
              </div>
              <div>
                <img
                  src={hotNFT}
                  alt="hot-nft"
                  className="w-auto h-[167px] object-cover object-center md:h-[240px]"
                />
              </div>
            </section>

            {/* PROMOTION */}
            <section className="relative w-1/2">
              <div className="text-left fade-in">
                <h2 className="text-2xl font-black text-primary mb-2 md:text-[32px]">
                  PROMOTION
                </h2>
              </div>
              <div>
                <img
                  src={promotion}
                  alt="hot-nft"
                  className="w-auto h-[167px] object-cover object-center md:h-[240px]"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
