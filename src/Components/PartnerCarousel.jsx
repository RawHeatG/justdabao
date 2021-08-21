import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FeaturedCarousel } from "./FeaturedCarousel";

export const PartnerCarousel = () => {
  const items = [
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 1.jpeg"
      alt="asset1"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 2.png"
      alt="asset2"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 3.jpeg"
      alt="asset3"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 4.png"
      alt="asset4"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 5.png"
      alt="asset5"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 6.png"
      alt="asset6"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 7.jpeg"
      alt="asset7"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 8.png"
      alt="asset8"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 9.png"
      alt="asset9"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 10.png"
      alt="asset10"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 11.png"
      alt="asset11"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 12.png"
      alt="asset12"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 13.png"
      alt="asset13"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 14.png"
      alt="asset14"
    />,
    <img
      className="mx-auto"
      src="/assets/PartnerCarousel/asset 15.png"
      alt="asset15"
    />,
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    activeIndex === 0
      ? setActiveIndex(items.length - 1)
      : setActiveIndex(activeIndex - 1);
  };
  const slideNext = () => {
    activeIndex === items.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);
  };
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="flex flex-col items-center pt-8 bg-gray-100 z-10">
      <h2 className="text-3xl font-bold pb-8">
        Our <span className="text-dark-green">300+ Green</span> Partners
      </h2>
      <div className="w-full px-6 md:px-20 relative ">
        <AliceCarousel
          infinite
          animationDuration={500}
          autoPlayInterval={3000}
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          responsive={{
            0: { items: 2 },
            568: { items: 4 },
            1024: { items: 6 },
          }}
        />

        <div className="b-refs-buttons text-gray-500">
          <button
            className="absolute top-1/2 left-0 hover:bg-gray-200 p-2 rounded-full"
            onClick={slidePrev}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-0 md:right-10 hover:bg-gray-200 p-2 rounded-full"
            onClick={slideNext}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <FeaturedCarousel />
    </div>
  );
};
