import { MainCarousel } from "./MainCarousel";

export const Hero = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full h-screen-3/4 p-4">
      <div className="w-full sm:w-1/2 flex justify-center items-center relative">
        <MainCarousel />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center space-y-8 h-full items-center text-center md:text-left md:items-start">
        <h2 className="text-5xl font-bold">
          Rescue delicious food and protect your planet
        </h2>
        <h3 className="text-2xl">
          Everyday, many eateries end up with perfectly edible food that remain
          unsold.
        </h3>
        <h3 className="text-2xl">
          Rescue them before they are discarded. And did we mention...get up to
          70% OFF.
        </h3>
        <button
          style={{ background: "#007749" }}
          className="text-white w-max py-4 px-6 text-2xl transform hover:scale-125 transition-all duration-500 ease-in-out rounded-full"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};
