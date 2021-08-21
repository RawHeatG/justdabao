import cartData from "../utils/data.json";
import { CartCard } from "./CartCard";

export const Cart = () => {
  return (
    <div className="flex flex-wrap justify-around items-center mx-auto w-full px-4 md:w-3/5 pb-8">
      {cartData.map((data) => (
        <CartCard key={data.id} data={data} />
      ))}
    </div>
  );
};
