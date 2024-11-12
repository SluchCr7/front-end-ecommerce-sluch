import React from 'react'
import Image from 'next/image'
const Features = () => {
  const features = [
    {
      img: "/frontend_assets/exchange_icon.png",
      description: "Easy Exchange of Orders"
    },
    {
      img: "/frontend_assets/quality_icon.png",
      description: "7 days free return policy"
    },
    {
      img: "/frontend_assets/clock.png",
      description: "Fast delivery after order"
    }
  ];


  return (
    <div className="flex items-center gap-10 p-5">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center flex-col gap-3">
          <Image src={feature.img} alt={`Feature ${index + 1}`} width={35} height={35} />
          <p className="text-ModeOne-text uppercase w-[70%] dark:text-ModeTwo-text text-center text-xs font-bold">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};


export default Features