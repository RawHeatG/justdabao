import { useCart } from "../Contexts";

export const Popup = () => {
  const { showPopup, setShowPopup } = useCart();
  const style = showPopup ? "top-0" : "-top-full";
  const { cartItems } = useCart();
  return (
    <div
      className={`${style} fixed right-0 shadow-md pb-8 w-96 bg-white z-10 transition-all duration-700 ease-in-out`}
    >
      <div className="p-2 m-2 flex items-center justify-between border-b-2 text-sm text-gray-400">
        <h4>BUY 3 GET EXTRA 5% OFF</h4>
        <svg
          onClick={() => setShowPopup(false)}
          className="w-6 h-6 cursor-pointer text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-evenly space-y-2">
          {cartItems.map((item) => (
            <div className="flex justify-evenly">
              <img
                className="h-20"
                src={`/assets/CartItems/${item.image_primary}`}
                alt={item.name}
              />
              <h3 className="font-bold w-1/2">{item.name}</h3>
              <h3>Qty: {item.quantity}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full flex justify-center items-center pb-8 font-bold text-2xl">
          Cart is Empty
        </div>
      )}
    </div>
  );
};
