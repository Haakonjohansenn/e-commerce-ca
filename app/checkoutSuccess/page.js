"use client"
import { useState, useEffect } from "react";
import useCart from "../(store)/useCart";
import { fetchProducts } from "../api";

export default function CheckoutSuccess() {
  const cartItems = useCart((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0); // State to store the total cost
  const [orderPlaced, setOrderPlaced] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0 && cartItems.length > 0) {
      const totalPrice = cartItems.reduce((total, cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        if (product) {
          return total + cartItem.price;
        }
        return total;
      }, 0);
      setTotalCost(totalPrice);
    }
  }, [products, cartItems]);

  const handlePlaceOrder = () => {
    useCart.getState().emptyCart();
    setOrderPlaced(true);
    window.scrollTo(0, 0);
  }

  return (
    <div className="border border-black 1px shadow-lg p-4 mt-6 flex flex-col mx-auto w-3/4">
      <h2 className="text-center p-4 text-lg">Your order:</h2>
      <div className="flex flex-col justify-center">
        {cartItems.map((cartItem) => {
          const product = products.find((p) => p.id === cartItem.id);
          if (!product) return null; // If product not found, skip rendering
          return (
            <div className="flex flex-row gap-4 justify-center" key={cartItem.id}>
              <img
                className="w-8 h-8"
                src={product.imageUrl}
                alt={cartItem.title}
              />
              <p className="p-2">{cartItem.title}</p>
              <p className="p-2">{cartItem.price}</p>
            </div>
          );
        })}
      </div>
      <p className="text-center mt-4">Total Cost: ${totalCost}</p>
      {!orderPlaced ? (
              <div className="flex justify-center p-4">
              <button onClick={handlePlaceOrder} className="w-2/4 bg-slate-700 p-3 hover:opacity-60 cursor-pointer">Place Order</button>
            </div>
      ) : (
        <p className="text-center mt-4 text-green-600 font-semibold">Order successfully placed!</p>
      )}
    </div>
  );
}
