import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const FeaturedCarousel = () => {
  const items = [
    <img
      className="mx-auto"
      src="/assets/FeaturedCarousel/asset 1.png"
      alt="asset1"
    />,
    <img
      className="mx-auto"
      src="/assets/FeaturedCarousel/asset 2.png"
      alt="asset2"
    />,
    <img
      className="mx-auto"
      src="/assets/FeaturedCarousel/asset 3.svg"
      alt="asset3"
    />,
    <img
      className="mx-auto"
      src="/assets/FeaturedCarousel/asset 4.png"
      alt="asset4"
    />,
    <img
      className="mx-auto"
      src="/assets/FeaturedCarousel/asset 5.png"
      alt="asset5"
    />,
    <img
      className="mx-auto"
      src="/assets/FeaturedCarousel/asset 6.png"
      alt="asset6"
    />,
    <img
      className="mx-auto"
      src="/assets/FeaturedCarousel/asset 7.png"
      alt="asset7"
    />,
  ];
  return (
    <div className="w-full md:w-1/2 mt-8 p-8 bg-white rounded-t-3xl flex flex-col items-center">
      <h2 className="text-3xl font-bold pb-8">Featured On</h2>
      <AliceCarousel
        infinite
        animationDuration={500}
        autoPlayInterval={3000}
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={items}
        responsive={{
          0: { items: 3 },
          568: { items: 4 },
          1024: { items: 6 },
        }}
      />
    </div>
  );
};
