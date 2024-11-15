'use client'
import Image from 'next/image'
import React, { useState , useEffect } from 'react'
import { products } from '@/public/frontend_assets/assets'
import Link from 'next/link'
/*************  ✨ Codeium Command 🌟  *************/
const Hero = () => {
  const [heroImage, setHeroImage] = useState('');
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomIndex];
    setHeroImage(randomProduct.image);
  }, []);

  return (
    <div className="bg-ModeOne-primary absolute top-0 min-h-[100vh] bg-[url('/frontend_assets/Clothes2.jpg')] bg-fixed bg-center bg-no-repeat bg-cover dark:bg-ModeTwo-primary w-full">
      <div className="container mx-auto min-h-[100vh] pt-20 p-5 flex flex-col items-center gap-6">
        <div className="flex flex-col justify-center w-full min-h-[80vh] lg:items-center gap-6">
          <h1 className="text-4xl paragraph uppercase font-bold tracking-[7px]">
            Best Products 
          </h1>
          <p className="text-sm w-2/3 text-center text-gray-100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            laborum quos facere quaerat quisquam illum, animi praesentium cum!
            Porro rerum fugiat quaerat pariatur modi sunt accusantium deserunt
            sint repellat ipsa?
          </p>
          <Link
            href="/Collection"
            className="border-[1px] border-ModeTwo-third text-ModeTwo-third uppercase tracking-[3px] flex items-center justify-center w-[200px] p-3 rounded-md"
          >
            Shop Now
          </Link>

        </div>
      </div>
    </div>
  );
};


export default Hero