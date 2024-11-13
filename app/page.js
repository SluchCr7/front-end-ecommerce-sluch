import Link from "next/link";
import Hero from "./Components/Hero";
import CollectionLat from "./Components/CollectionLat";
import BestSellers from "./Components/BestSellers";
import Ads from "./Components/Ads";
import Features from "./Components/Features";
import env from 'dotenv'
env.config()
export default function Home() {
  return (
    <div className="flex items-center flex-col gap-20">
      <Hero />
      <div className="flex items-center flex-col gap-20 pt-[42rem]">
        <CollectionLat />
        <Ads/>
        <BestSellers />
        <Features/>
      </div>
    </div>
  );
}
