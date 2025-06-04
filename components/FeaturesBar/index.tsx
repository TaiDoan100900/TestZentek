import React from "react";
import trending from "../../assets/svgs/Cashback.svg";
import ranking from "../../assets/svgs/Sport Race.svg";
import videoNFT from "../../assets/svgs/Live.svg";
import howToBuy from "../../assets/svgs/Racing.svg";
import newNFT from "../../assets/svgs/Live Casino.svg";
import roadmap from "../../assets/svgs/Minigames.svg";

interface FeatureItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  label,
  isActive = false,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="feature-item grid grid-rows-2 items-center justify-items-center h-full py-4 px-2 gap-2 place-content-center md:px-3 md:gap-3 md:py-5"
  >
    <div className="flex items-center justify-center h-7 sm:h-[42px]">
      <img
        src={icon}
        alt={label}
        className="w-auto h-7 sm:h-[42px] object-contain"
      />
    </div>
    <span className="text-[10px] font-medium text-center sm:text-sm sm:font-normal self-start">{label}</span>
  </button>
);

export interface FeaturesBarProps {
  activeFeature?: string;
  onFeatureClick?: (feature: string) => void;
}

const FeaturesBar: React.FC<FeaturesBarProps> = ({
  activeFeature = "trending",
  onFeatureClick,
}) => {
  const features = [
    { id: "trending", icon: trending, label: "FREE TO EARN" },
    { id: "rankings", icon: ranking, label: "RANKINGS" },
    { id: "video-nft", icon: videoNFT, label: "VIDEO-NFT" },
    { id: "how-to-buy", icon: howToBuy, label: "HOW TO BUY" },
    { id: "new-nfts", icon: newNFT, label: "NEW NFTS" },
    { id: "roadmaps", icon: roadmap, label: "ROADMAPS" },
  ];

  return (
    <div className="relative h-[92px] bg-[#1F2023] backdrop-blur-sm sm:h-[120px]">
      <div className="max-w-section h-full">
        <div className="grid grid-cols-6 h-full">
          {features.map((feature) => (
            <FeatureItem
              key={feature.id}
              icon={feature.icon}
              label={feature.label}
              isActive={activeFeature === feature.id}
              onClick={() => onFeatureClick?.(feature.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;
