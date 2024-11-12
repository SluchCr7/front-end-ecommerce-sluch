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
    <div className="bg-ModeOne-primary my-4 dark:bg-ModeTwo-primary w-full">
      <div className="container mx-auto min-h-[70vh] pt-20 p-5 flex flex-col lg:flex-row items-center gap-6">
        <div className="flex flex-col lg:items-start gap-6">
          <span className="text_headline text-ModeOne-third dark:text-ModeTwo-third">
            Best Products
          </span>
          <h1 className="text-5xl font-bold text-ModeOne-text dark:text-ModeTwo-text">
            Latest Collection
          </h1>
          <p className="text-sm w-2/3 text-center md:text-left text-ModeOne-text dark:text-ModeTwo-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            laborum quos facere quaerat quisquam illum, animi praesentium cum!
            Porro rerum fugiat quaerat pariatur modi sunt accusantium deserunt
            sint repellat ipsa?
          </p>
          <Link
            href="/Collection"
            className="bg-red-700 cursor-pointer text-white px-4 py-2 rounded-md"
          >
            Shop Now
          </Link>

        </div>
        <div className="flex items-center flex-col gap-3">
          <Image
            src={"/frontend_assets/hero_img.png"}
            alt="hero"
            width={1100}
            height={1100}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};


export default Hero