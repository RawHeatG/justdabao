export const CartCard = ({
  data: { name, price, discounted_price, image_primary, image_seconadry },
}) => {
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
      <button className="py-2 w-full border-2 rounded-full hover:bg-dark-green text-dark-green hover:text-white border-dark-green">
        Add to Cart
      </button>
    </div>
  );
};
