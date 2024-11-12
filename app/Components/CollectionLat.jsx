'use client'
import React, { useContext, useEffect } from 'react'
import Title from './Title'
import { shopContext } from '../Context/ShopContext'
import Image from 'next/image'
import Link from 'next/link'
const CollectionLat = () => {
  const { products, currency } = useContext(shopContext)

  const latestProducts = products
    .filter((product) => new Date(product.date) < new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
    .slice(0, 8)

  return (
    <div className="container mx-auto">
      <div className="flex items-center flex-col gap-3">
        <Title text1="Latest Collection" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
          {latestProducts.map((product, index) => (
            <Link
              href={`/Product/${product._id}`}
              className="flex items-start flex-col gap-3"
              key={index}
            >
              <Image
                src={product.image}
                alt={product._id}
                width={300}
                height={300}
                className="rounded-sm"
              />
              <h3 className="text-ModeOne-text name dark:text-ModeTwo-text font-bold">
                {product.name}
              </h3>
              <span className="text-lg text-ModeOne-third dark:text-ModeTwo-third">
                {product.price} $
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionLat