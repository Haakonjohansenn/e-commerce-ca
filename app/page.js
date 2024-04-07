"use client"

import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import Card from './ProductCard';;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className='p-4 flex flex-col'>
      <h1>Products</h1>
      <input
        type='text'
        placeholder='Search products...'
        className='border border-gray-300 rounded-md p-2 mb-4'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}

