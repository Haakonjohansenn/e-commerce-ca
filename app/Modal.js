"use client";
import ReactDom from "react-dom";
import useCart from "./(store)/useCart";
import { useRouter } from "next/navigation";

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);
  const router = useRouter();

  async function checkout() {
      router.push("/checkoutSuccess");
  }

  return ReactDom.createPortal(
    <div className="abosulute fixed left-0 top-0 w-screen h-screen z-50 border-solid 1px">
      <div
        onClick={closeModal}
        className="bg-transparent absolute inset-0"
      ></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow sm:w-96 max-w-96 gap-4">
        <div className="flex items-center justify-between p-6 text-xl relative">
          <h1>Cart</h1>
          <i
            onClick={closeModal}
            className="fa-solid cursor-pointer fa-xmark"
          ></i>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
        <div className="p-4 overflow-scroll flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div className="flex flex-col gap-2" key={itemIndex}>
                    <div className="flex items-center justify-between">
                      <h2>{cartItem.title}</h2>
                      <p className="pr-5">{cartItem.price}</p>
                    </div>
                    <p className="text-slate-600 text-sm">Quantity: 1</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div
          onClick={checkout}
          className="border border-solid border-slate-700 text-xl m-4 p-4 uppercase bg-slate-700 grid place-items-center hover:opacity-60 cursor-pointer"
        >
          Checkout
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
