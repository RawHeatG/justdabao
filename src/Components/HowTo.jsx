export const HowTo = () => {
  return (
    <div className="w-full px-4 md:w-3/5 flex flex-col space-y-12 justify-center items-center mx-auto pt-8">
      <div className="w-full  border-b-2 border-black font-bold text-3xl text-center">
        <h2>It's simple to begin</h2>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center md:space-x-8">
        <div className="flex flex-col justify-center items-center text-center">
          <img src="/assets/step1.jpeg" alt="step1" />
          <h3 className="text-2xl">Step 1: Order</h3>
          <p className="pt-4">
            Click Order Now above & order the meal you love. Use filters to
            help!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img src="/assets/step2.jpeg" alt="step2" />
          <h3 className="text-2xl">Step 2: Confirm Pick Up Slot</h3>
          <p className="pt-4">
            Click Order Now above & order the meal you love. Use filters to
            help!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img src="/assets/step3.jpeg" alt="step3" />
          <h3 className="text-2xl">Step 3: Pick Up & Enjoy</h3>
          <p className="pt-4">
            Click Order Now above & order the meal you love. Use filters to
            help!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center items-center">
        <div className="w-full md:w-1/2">
          <img src="/assets/bag.png" alt="bag" />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-sm justify-around items-center">
          <h2 className="text-3xl font-bold text-center">The Shiok Bag</h2>
          <p>
            Every order at Just Dabao is a Shiok Bag. These Shiok bags contain a
            variety of unsold food & beverages from eateries.
          </p>
          <p>
            While the contents are a surprise, you will know the cuisine, the
            diet type, the google rating and the proximity of the eatery to help
            you inform your decision.
          </p>
          <p>
            Once you made the purchase, you will know the eatery name and
            address so that you can pick up the Shiok Bag during the pick up
            window.
          </p>
          <p>
            It works in everyone's favor: eateries get the flexibility to ensure
            nothing is thrown out while you get the joy of discovery at ultra
            low prices.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <h2 className="font-bold text-3xl pb-12 text-center">
          Save these Shiok Bags Now!
        </h2>
      </div>
    </div>
  );
};
