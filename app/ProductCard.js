import React from "react";
import { useRouter } from "next/navigation";
import useCart from "./(store)/useCart";

export default function Card({ product }) {
  const { title, description, price, discountedPrice, imageUrl, id } = product;
  const router = useRouter();
  const setProduct = useCart((state) => state.setProduct);

  function clickProduct() {
    const newProduct = {
      title,
      description,
      price,
      discountedPrice,
      id,
      imageUrl
    };
    setProduct({ newProduct });
    router.push('/product?id=' + id);
  }

  return (
    <div onClick={clickProduct} className='flex flex-col shadow bg-white hover:shadow-lg cursor-pointer'>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full max-h-40 object-cover"
      />
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex items-center justify-between'>
          <h2>{title}</h2>
          {discountedPrice && (
            <div className="flex items-center gap-2">
              <p className="text-green-600">${discountedPrice}</p>
              <p className="text-gray-400 line-through">${price}</p>
            </div>
          )}
          {!discountedPrice && <p>Price: ${price}</p>}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
