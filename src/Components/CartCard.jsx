import { useState } from "react";
import { useCart } from "../Contexts";

export const CartCard = ({ data }) => {
  const { cartItems, setCartItems, setShowPopup } = useCart();
  const [buttonText, setButtonText] = useState("Add To Cart");
  const { id, name, price, discounted_price, image_primary } = data;
  const cartHandler = () => {
    setButtonText("Adding...");

    setTimeout(() => {
      setButtonText("Thank you!");
      if (cartItems.filter((item) => item.id === id).length > 0) {
        setCartItems(
          cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setCartItems((items) => [...items, { ...data, quantity: 1 }]);
      }
      setShowPopup(true);
      setTimeout(() => setButtonText("Add To Cart"), 500);
    }, 1000);
  };
  return (
    <div className="w-full h-full md:w-60 p-4 flex flex-col space-y-2 justify-center items-center text-center">
      <img
        className="object-cover"
        src={`/assets/CartItems/${image_primary}`}
        alt={name}
      />
      <h3 className="font-bold">{name}</h3>
      <div>
        {discounted_price ? (
          <h3 className="font-bold line-through">${price}</h3>
        ) : (
          <br></br>
        )}
        <h3 className="font-bold text-red-600">
          ${discounted_price ? discounted_price : price}
        </h3>
      </div>
      <button
        onClick={cartHandler}
        className="py-2 w-full border-2 rounded-full hover:bg-dark-green text-dark-green hover:text-white border-dark-green"
      >
        {buttonText}
      </button>
    </div>
  );
};
