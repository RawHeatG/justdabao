import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const SecondaryCarousel = () => {
  const items = [
    <img src="/assets/car1_img1.jpeg" alt="img1" />,
    <img src="/assets/car1_img2.jpeg" alt="img2" />,
    <img src="/assets/car1_img3.jpeg" alt="img3" />,
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

  return [
    <AliceCarousel
      //   paddingLeft={100}
      autoPlay
      infinite
      animationDuration={500}
      autoPlayInterval={3000}
      mouseTracking
      disableDotsControls
      disableButtonsControls
      items={items}
      activeIndex={activeIndex}
      onSlideChanged={syncActiveIndex}
    />,
    <div className="b-refs-buttons text-gray-500">
      <button
        className="absolute top-1-2 left-0 hover:bg-gray-200 p-2 rounded-full"
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
        className="absolute top-1-2 right-0 md:right-10 hover:bg-gray-200 p-2 rounded-full"
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
    </div>,
  ];
};
