"use client";

import useCart from "../(store)/useCart";

export default function ProductPage(props) {
  const { searchParams } = props;
  const { id } = props;
  const product = useCart((state) => state.product);
  const addToCart = useCart((state) => state.addToCart);
  const { title, imageUrl, price, description } = product;

  function handleAddToCart() {
    const newItem = {
      quantity: 1,
      id: id
    }
    addToCart({newItem})
  }

  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 md:shadow">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex md:flex-col md:items-start text-xl  items-center justify-between gap-2">
            <h3>{title}</h3>
            <p className="md:text-base">${price}</p>
          </div>
          <p className="text-sm flex-1">{description}</p>
          <button onClick={handleAddToCart} className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
