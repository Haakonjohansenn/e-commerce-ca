"use client";

import React from "react";
import Link from "next/link";
import useCart from "./(store)/useCart";
import Modal from "./Modal";

export default function Header() {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const handleOpenModal = useCart(state => state.setOpenModal)

  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
      {openModal && <Modal />}
      <Link href="/">
        <h1 className="uppercase cursor-pointer">Shop</h1>
      </Link>
      <Link href="/contact">
      <h2 className="text-sm hover:opacity-40 cursor-pointer">Contact</h2>
      </Link>
      <div onClick={handleOpenModal} className="relative grid cursor-pointer group place-items-center">
        {cartItems.length > 0 && (
          <div className="absolute top-0 right-0 bg-orange-600 aspect-square h-5 sm:h-6 pointer-events-none grid place-items-center -translate-y-1/2 translate-x-1/2 text-black rounded-full">
            <p className="text-xs sm:text-sm">{cartItems.length}</p>
          </div>
        )}
        <i className="fa-solid fa-cart-shopping cursor-pointer group-hover:text-slate-500"></i>
      </div>
    </header>
  );
}
