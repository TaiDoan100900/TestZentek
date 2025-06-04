import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function cn(...args) {
  return twMerge(clsx(args));
}
const Button = ({
  variant = "primary",
  children,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClasses = "px-8 py-2 h-9 rounded-full transition-all duration-300 ease-in-out cursor-pointer focus:outline-none sm:h-10";
  const variantClasses = {
    primary: {
      normal: "bg-primary text-button-primary",
      disabled: "bg-primary text-button-primary cursor-not-allowed opacity-40"
    },
    secondary: {
      normal: "bg-transparent text-button-secondary border-1 border-primary",
      disabled: "bg-transparent text-button-secondary border-1 border-primary cursor-not-allowed opacity-40"
    }
  };
  const getButtonClasses = () => {
    const state = disabled ? "disabled" : "normal";
    return cn(baseClasses, variantClasses[variant][state], className);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: getButtonClasses(),
      disabled,
      ...props,
      children: /* @__PURE__ */ jsx("h6", { className: "font-black text-base italic", children })
    }
  );
};
const hammer = "data:image/svg+xml,%3csvg%20width='24'%20height='20'%20viewBox='0%200%2024%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='0.5'%20width='24'%20height='3'%20rx='1.5'%20fill='white'%20fill-opacity='0.8'/%3e%3crect%20y='8.5'%20width='24'%20height='3'%20rx='1.5'%20fill='white'%20fill-opacity='0.8'/%3e%3crect%20y='16.5'%20width='16'%20height='3'%20rx='1.5'%20fill='white'%20fill-opacity='0.8'/%3e%3c/svg%3e";
const close = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.06066%202.93934C2.47487%203.52513%202.47487%204.47487%203.06066%205.06066L17.9099%2019.9099C18.4957%2020.4957%2019.4454%2020.4957%2020.0312%2019.9099C20.617%2019.3241%2020.617%2018.3744%2020.0312%2017.7886L5.18198%202.93934C4.59619%202.35355%203.64645%202.35355%203.06066%202.93934Z'%20fill='white'%20fill-opacity='0.8'/%3e%3cpath%20d='M3.06066%2020.0607C2.47487%2019.4749%202.47487%2018.5251%203.06066%2017.9393L17.9099%203.0901C18.4957%202.50431%2019.4454%202.50431%2020.0312%203.0901C20.617%203.67588%2020.617%204.62563%2020.0312%205.21142L5.18198%2020.0607C4.59619%2020.6464%203.64645%2020.6464%203.06066%2020.0607Z'%20fill='white'%20fill-opacity='0.8'/%3e%3c/svg%3e";
const Header = ({
  logo: logo2,
  navItems,
  onSignUp,
  onLogIn,
  onNavItemClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleNavClick = (item) => {
    if (onNavItemClick) {
      onNavItemClick(item);
    }
    setIsMobileMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: "bg-black relative z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-container px-5 py-3 sm:px-8 sm:py-5 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "-mr-2 pt-1 lg:hidden", children: /* @__PURE__ */ jsx("button", { onClick: toggleMobileMenu, "aria-label": "Toggle menu", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: isMobileMenuOpen ? close : hammer,
            alt: "Menu Icon",
            className: "w-6 h-6 flex-shrink-0"
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logo2,
            alt: "Logo",
            className: "w-[72px] h-9 flex-shrink-0 sm:w-[79px] sm:h-[39px]"
          }
        ) }),
        /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex", children: navItems.map((item) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleNavClick(item),
            className: cn(
              "px-[18px] py-2 text-sm font-medium transition-colors duration-200 cursor-pointer text-secondary text-button-hover-primary",
              item.isActive && "text-primary bg-[#383A42] rounded-full"
            ),
            children: item.label
          },
          `${item.id}-${item.isActive}`
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "primary",
            onClick: onSignUp,
            className: "text-sm px-6 py-2",
            children: "SIGN UP"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            onClick: onLogIn,
            className: "text-sm px-6 py-2",
            children: "LOG IN"
          }
        )
      ] })
    ] }) }),
    isMobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "bg-[#1F2023] w-full h-full fixed top-[60px] sm:top-20 lg:hidden", children: /* @__PURE__ */ jsx("div", { className: "p-5 space-y-4", children: navItems.map((item) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => handleNavClick(item),
        className: cn(
          "w-full text-center px-5 py-2 text-sm font-medium transition-colors duration-200 text-secondary text-button-hover-primary",
          item.isActive && "text-primary bg-[#383A42] rounded-full"
        ),
        children: item.label
      },
      item.id
    )) }) })
  ] });
};
const Slide = ({ image, imageMobile }) => /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx(
    "img",
    {
      src: image,
      alt: " Slide",
      className: "hidden w-full h-[450px] object-cover object-center md:block"
    }
  ),
  /* @__PURE__ */ jsx("img", { src: imageMobile, alt: "Slide Mobile", className: "w-full h-[180px] object-cover object-center md:hidden" })
] });
const SlideSection = ({ slides: slides2 }) => {
  return /* @__PURE__ */ jsxs("section", { className: "max-w-container relative overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
          clickable: true,
          el: ".slide-swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active"
        },
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false
        },
        loop: slides2.length > 1,
        className: "h-full",
        children: slides2.map((slide, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(Slide, { ...slide }) }, index))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "slide-swiper-pagination absolute bottom-3 w-full z-30" })
  ] });
};
const trending = "/assets/Cashback-yLilYQsj.svg";
const ranking = "/assets/Sport%20Race-DXcE3Lul.svg";
const videoNFT = "data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7010_1601)'%3e%3cpath%20d='M21.3747%2042.7499C16.1924%2042.7436%2011.1973%2040.8127%207.35826%2037.3318C3.51919%2033.8509%201.10982%2029.0682%200.597551%2023.9114C0.085285%2018.7546%201.50665%2013.5914%204.58589%209.42326C7.66514%205.25514%2012.1828%202.37928%2017.2624%201.35358C22.3421%200.327867%2027.6217%201.22541%2032.077%203.87211C36.5323%206.51881%2039.8458%2010.726%2041.3746%2015.6775C42.9035%2020.6291%2042.5388%2025.9719%2040.3512%2030.6698C38.1636%2035.3676%2034.3091%2039.0854%2029.5354%2041.102C26.9538%2042.195%2024.178%2042.7555%2021.3747%2042.7499ZM21.3747%203.03746C17.6657%203.03746%2014.0399%204.13729%2010.9561%206.19789C7.87217%208.25849%205.46856%2011.1873%204.04919%2014.6139C2.62983%2018.0406%202.25844%2021.8111%202.98203%2025.4488C3.70561%2029.0865%205.49167%2032.4281%208.11432%2035.0506C10.737%2037.6733%2014.0784%2039.4594%2017.7161%2040.1829C21.3538%2040.9066%2025.1245%2040.5352%2028.551%2039.1158C31.9777%2037.6964%2034.9065%2035.2928%2036.9671%2032.2089C39.0277%2029.125%2040.1275%2025.4994%2040.1275%2021.7904C40.1229%2016.8182%2038.1457%2012.051%2034.6298%208.53517C31.114%205.01932%2026.3468%203.04209%2021.3747%203.03746Z'%20fill='%23F5B923'/%3e%3cpath%20d='M21.3836%2035.7816C17.9288%2035.7773%2014.5987%2034.4901%2012.0393%2032.1694C9.47991%2029.8488%207.87367%2026.6604%207.53216%2023.2225C7.19065%2019.7847%208.13823%2016.3425%2010.191%2013.5637C12.2439%2010.785%2015.2556%208.86777%2018.6421%208.18396C22.0285%207.50016%2025.5482%208.09851%2028.5184%209.86299C31.4887%2011.6275%2033.6976%2014.4322%2034.7169%2017.7332C35.7361%2021.0342%2035.4929%2024.5962%2034.0346%2027.728C32.5762%2030.8599%2030.0065%2033.3385%2026.8241%2034.6829C25.103%2035.4115%2023.2525%2035.7853%2021.3836%2035.7816ZM21.3836%209.30656C18.911%209.30656%2016.4938%2010.0398%2014.4379%2011.4135C12.3819%2012.7872%2010.7795%2014.7398%209.83325%2017.0242C8.88701%2019.3087%208.63942%2021.8224%209.12181%2024.2475C9.6042%2026.6727%2010.7949%2028.9002%2012.5433%2030.6487C14.2918%2032.3972%2016.5194%2033.5878%2018.9445%2034.0703C21.3696%2034.5526%2023.8834%2034.305%2026.1678%2033.3588C28.4522%2032.4125%2030.4048%2030.8101%2031.7786%2028.7542C33.1523%2026.6982%2033.8854%2024.2811%2033.8854%2021.8085C33.8824%2018.4937%2032.5642%2015.3156%2030.2203%2012.9717C27.8764%2010.6278%2024.6983%209.30963%2021.3836%209.30656Z'%20fill='%23F5B923'%20stroke='%23F5B923'%20stroke-width='1.16139'/%3e%3cpath%20d='M26.919%2020.8786C27.6086%2021.3383%2027.6086%2022.3516%2026.919%2022.8112L19.7216%2027.6095C18.9499%2028.124%2017.916%2027.5707%2017.916%2026.6431V17.0466C17.916%2016.119%2018.9499%2015.5658%2019.7216%2016.0803L26.919%2020.8786Z'%20fill='%23F5B923'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7010_1601'%3e%3crect%20width='41.81'%20height='41.81'%20fill='white'%20transform='translate(0.495117%200.939941)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const howToBuy = "/assets/Racing-pIFpxN6q.svg";
const newNFT = "/assets/Live%20Casino-mAqxNxxs.svg";
const roadmap = "/assets/Minigames-AfyPpFHJ.svg";
const FeatureItem = ({
  icon,
  label,
  isActive = false,
  onClick
}) => /* @__PURE__ */ jsxs(
  "button",
  {
    onClick,
    className: "feature-item grid grid-rows-2 items-center justify-items-center h-full py-4 px-2 gap-2 place-content-center md:px-3 md:gap-3 md:py-5",
    children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-7 sm:h-[42px]", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: icon,
          alt: label,
          className: "w-auto h-7 sm:h-[42px] object-contain"
        }
      ) }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium text-center sm:text-sm sm:font-normal self-start", children: label })
    ]
  }
);
const FeaturesBar = ({
  activeFeature = "trending",
  onFeatureClick
}) => {
  const features = [
    { id: "trending", icon: trending, label: "FREE TO EARN" },
    { id: "rankings", icon: ranking, label: "RANKINGS" },
    { id: "video-nft", icon: videoNFT, label: "VIDEO-NFT" },
    { id: "how-to-buy", icon: howToBuy, label: "HOW TO BUY" },
    { id: "new-nfts", icon: newNFT, label: "NEW NFTS" },
    { id: "roadmaps", icon: roadmap, label: "ROADMAPS" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "relative h-[92px] bg-[#1F2023] backdrop-blur-sm sm:h-[120px]", children: /* @__PURE__ */ jsx("div", { className: "max-w-section h-full", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-6 h-full", children: features.map((feature) => /* @__PURE__ */ jsx(
    FeatureItem,
    {
      icon: feature.icon,
      label: feature.label,
      isActive: activeFeature === feature.id,
      onClick: () => onFeatureClick == null ? void 0 : onFeatureClick(feature.id)
    },
    feature.id
  )) }) }) });
};
const arrowLeft = "data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.99981%2012.8801C7.99905%2012.7485%208.02428%2012.618%208.07404%2012.4962C8.12381%2012.3743%208.19713%2012.2635%208.28981%2012.1701L14.2898%206.17007C14.4781%205.98176%2014.7335%205.87598%2014.9998%205.87598C15.2661%205.87598%2015.5215%205.98176%2015.7098%206.17007C15.8981%206.35837%2016.0039%206.61377%2016.0039%206.88007C16.0039%207.14637%2015.8981%207.40176%2015.7098%207.59007L10.4098%2012.8801L15.6998%2018.1701C15.8636%2018.3614%2015.9492%2018.6074%2015.9395%2018.8591C15.9298%2019.1108%2015.8255%2019.3495%2015.6474%2019.5276C15.4693%2019.7057%2015.2305%2019.8101%2014.9789%2019.8198C14.7272%2019.8295%2014.4811%2019.7439%2014.2898%2019.5801L8.28981%2013.5801C8.10507%2013.3938%208.00092%2013.1424%207.99981%2012.8801Z'%20fill='white'%20fill-opacity='0.6'/%3e%3c/svg%3e";
const NFTCard$1 = ({ name, image }) => /* @__PURE__ */ jsx("div", { className: "rounded-[7px] overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer md:rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "w-auto h-[140px] rounded-[7px] overflow-hidden md:rounded-xl md:h-[245px]", children: /* @__PURE__ */ jsx(
  "img",
  {
    src: image,
    alt: name,
    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  }
) }) });
const NFTCollectionSection = ({
  collections
}) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation],
        spaceBetween: 16,
        slidesPerView: 2,
        navigation: {
          nextEl: ".nft-collection-swiper-button-next",
          prevEl: ".nft-collection-swiper-button-prev"
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16
          }
        },
        loop: true,
        className: "relative",
        children: collections.map((nft) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(NFTCard$1, { ...nft }) }, nft.id))
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-0 right-0 flex space-x-2", children: [
      /* @__PURE__ */ jsx("button", { className: "nft-collection-swiper-button-prev w-8 h-8 bg-[#383A42] hover:bg-gray-700 cursor-pointer rounded-lg flex items-center justify-center transition-colors md:rounded-xl md:w-10 md:h-10", children: /* @__PURE__ */ jsx("img", { src: arrowLeft, alt: "prev", className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsx("button", { className: "nft-collection-swiper-button-next w-8 h-8 bg-[#383A42] hover:bg-gray-700 cursor-pointer rounded-lg flex items-center justify-center transition-colors md:rounded-xl md:w-10 md:h-10", children: /* @__PURE__ */ jsx("img", { src: arrowLeft, alt: "prev", className: "w-6 h-6 rotate-180" }) })
    ] })
  ] });
};
const NFTCard = ({ name, image }) => /* @__PURE__ */ jsx("div", { className: "rounded-[7px] overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer md:rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "w-auto h-[172px] rounded-[7px] overflow-hidden md:rounded-xl md:h-[240px]", children: /* @__PURE__ */ jsx(
  "img",
  {
    src: image,
    alt: name,
    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  }
) }) });
const NFTDropCalendarSection = ({
  nftDropCalendar: nftDropCalendar2
}) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation],
        navigation: {
          nextEl: ".nft-drop-swiper-button-next",
          prevEl: ".nft-drop-swiper-button-prev"
        },
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        className: "relative",
        children: nftDropCalendar2.map((nft) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(NFTCard, { ...nft }) }, nft.id))
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-0 right-0 flex space-x-2", children: [
      /* @__PURE__ */ jsx("button", { className: "nft-drop-swiper-button-prev w-8 h-8 bg-[#383A42] hover:bg-gray-700 cursor-pointer rounded-lg flex items-center justify-center transition-colors md:rounded-xl md:w-10 md:h-10", children: /* @__PURE__ */ jsx("img", { src: arrowLeft, alt: "prev", className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsx("button", { className: "nft-drop-swiper-button-next w-8 h-8 bg-[#383A42] hover:bg-gray-700 cursor-pointer rounded-lg flex items-center justify-center transition-colors md:rounded-xl md:w-10 md:h-10", children: /* @__PURE__ */ jsx("img", { src: arrowLeft, alt: "prev", className: "w-6 h-6 rotate-180" }) })
    ] })
  ] });
};
const slides = [
  {
    id: 1,
    image: "../../assets/images/Slide1.png",
    imageMobile: "../../assets/images/Slide1Mobile.png"
  },
  {
    id: 2,
    image: "../../assets/images/Slide2.png",
    imageMobile: "../../assets/images/Slide2Mobile.png"
  }
];
const nftCollections = [
  {
    id: 1,
    name: "NFT Collection 1",
    image: "../../assets/images/NFT1.png"
  },
  {
    id: 2,
    name: "NFT Collection 2",
    image: "../../assets/images/NFT2.png"
  },
  {
    id: 3,
    name: "NFT Collection 3",
    image: "../../assets/images/NFT3.png"
  },
  {
    id: 4,
    name: "NFT Collection 4",
    image: "../../assets/images/NFT4.png"
  },
  {
    id: 5,
    name: "NFT Collection 5",
    image: "../../assets/images/NFT5.png"
  },
  {
    id: 6,
    name: "NFT Collection 6",
    image: "../../assets/images/NFT6.png"
  }
];
const nftDropCalendar = [
  {
    id: 1,
    name: "NFT Drop 1",
    image: "../../assets/images/NFTDrop.png"
  },
  {
    id: 2,
    name: "NFT Drop 2",
    image: "../../assets/images/NFTDrop.png"
  },
  {
    id: 3,
    name: "NFT Drop 3",
    image: "../../assets/images/NFTDrop.png"
  }
];
const hotNFT = "/assets/HotNFT-NS0LwisA.png";
const promotion = "/assets/Promotion-CXnmJf0l.png";
const LandingPage = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(SlideSection, { slides }),
    /* @__PURE__ */ jsx(FeaturesBar, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-section px-4 py-10 sm:px-8 lg:px-0 md:py-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative mb-10 md:mb-20", children: [
        /* @__PURE__ */ jsx("div", { className: "text-left fade-in", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-primary mb-2 md:text-[32px]", children: "NEW NFT COLLECTIONS" }) }),
        /* @__PURE__ */ jsx(NFTCollectionSection, { collections: nftCollections })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row md:gap-6", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative mb-10 w-full overflow-hidden lg:mb-0 lg:w-1/2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-left fade-in", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-primary mb-2 md:text-[32px]", children: "NFT DROPS CALENDAR" }) }),
          /* @__PURE__ */ jsx(NFTDropCalendarSection, { nftDropCalendar })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 md:gap-6 w-full lg:w-1/2", children: [
          /* @__PURE__ */ jsxs("section", { className: "relative w-1/2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-left fade-in", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-primary mb-2 md:text-[32px]", children: "HOT NFT" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "img",
              {
                src: hotNFT,
                alt: "hot-nft",
                className: "w-auto h-[167px] object-cover object-center md:h-[240px]"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "relative w-1/2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-left fade-in", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-primary mb-2 md:text-[32px]", children: "PROMOTION" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "img",
              {
                src: promotion,
                alt: "hot-nft",
                className: "w-auto h-[167px] object-cover object-center md:h-[240px]"
              }
            ) })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const downloadIcon = "/assets/InstallApp-BW1F98kq.png";
const FooterLink = ({ label, href, onClick }) => /* @__PURE__ */ jsx(
  "a",
  {
    href,
    onClick,
    className: "text-secondary hover:text-white transition-colors duration-200 text-sm cursor-pointer",
    children: label
  }
);
const FooterSection = ({ title, links: links2 }) => /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("h5", { className: "text-white font-black mb-3 text-lg uppercase", children: title }),
  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: links2.map((link, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(FooterLink, { ...link }) }, index)) })
] });
const Footer = () => {
  const aboutUsLinks = [
    { label: "Careers", href: "#" },
    { label: "Company Details", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Help center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Affiliate", href: "#" }
  ];
  const productsLinks = [
    { label: "NFT Marketplace", href: "#" },
    { label: "Slingshot", href: "#" },
    { label: "Swaps", href: "#" },
    { label: "NFT Launchpad", href: "#" },
    { label: "Runes Platform", href: "#" },
    { label: "Creator Dashboard", href: "#" }
  ];
  const resourcesLinks = [
    { label: "Support", href: "#" },
    { label: "API", href: "#" },
    { label: "Feature Requests", href: "#" },
    { label: "Trust & Safety", href: "#" },
    { label: "Sitemap", href: "#" }
  ];
  const contactLinks = [
    { label: "support@tech.email", href: "mailto:support@tech.email" },
    { label: "affiliate@tech.com", href: "mailto:affiliate@tech.com" }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-solid border-[#383A42] text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-section px-5 py-10 sm:px-8 lg:px-0", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 mb-8 gap-6 lg:gap-10 md:grid-cols-4", children: [
    /* @__PURE__ */ jsx(FooterSection, { title: "About Us", links: aboutUsLinks }),
    /* @__PURE__ */ jsx(FooterSection, { title: "Products", links: productsLinks }),
    /* @__PURE__ */ jsx(FooterSection, { title: "Resources", links: resourcesLinks }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(FooterSection, { title: "Contact Us", links: contactLinks }),
      /* @__PURE__ */ jsx("button", { className: "mt-6", children: /* @__PURE__ */ jsx("img", { src: downloadIcon, alt: "install", className: "w-[151px] h-[44px]" }) })
    ] })
  ] }) }) });
};
const logo = "data:image/png;base64,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";
const initialNavItems = [{
  id: "home",
  label: "HOME",
  href: "/"
}, {
  id: "item1",
  label: "ITEM1",
  href: "#"
}, {
  id: "item2",
  label: "ITEM2",
  href: "#"
}, {
  id: "item3",
  label: "ITEM3",
  href: "#"
}, {
  id: "item4",
  label: "ITEM4",
  href: "#"
}];
const home = UNSAFE_withComponentProps(function Home() {
  const [activeNavId, setActiveNavId] = useState("home");
  const [navItems, setNavItems] = useState(initialNavItems);
  useEffect(() => {
    const updatedNavItems = navItems.map((item) => ({
      ...item,
      isActive: item.id === activeNavId
    }));
    setNavItems(updatedNavItems);
  }, [activeNavId]);
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-black",
    children: [/* @__PURE__ */ jsx(Header, {
      logo,
      navItems,
      onNavItemClick: (item) => setActiveNavId(item.id)
    }), /* @__PURE__ */ jsx("main", {
      children: /* @__PURE__ */ jsx(LandingPage, {})
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-GYH6YEgi.js", "imports": ["/assets/chunk-NL6KNZEE-b53XU3gX.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-zLDpGoHs.js", "imports": ["/assets/chunk-NL6KNZEE-b53XU3gX.js"], "css": ["/assets/root-BixQ7xD2.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DEUEXUjh.js", "imports": ["/assets/chunk-NL6KNZEE-b53XU3gX.js"], "css": ["/assets/home-DyV-DZGE.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-196f2264.js", "version": "196f2264", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
