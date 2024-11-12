'use client'
import React , {useEffect , useContext, Profiler} from 'react'
import { shopContext } from '../Context/ShopContext'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Link from 'next/link';
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { authContext } from '../Context/authContext';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { numProducts } = useContext(shopContext);
  const { user, logout, isUserLoggedIn } = useContext(authContext);
  const pathname = usePathname();
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setIsDarkMode(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const links = [
    "About",
    "Collection",
    "contact",
  ];

  return (
    <div className="flex items-center z-[999] flex-col bg-ModeOne-primary dark:bg-ModeTwo-primary">
      <div className={`flex items-center justify-between w-full py-3 px-9 ${isNavMobileOpen ? "" : "shadow-lg dark:shadow-sm dark:shadow-gray-400"}`}>
        <Link href="/" className="text-xl tracking-[2px] text-ModeOne-text dark:text-ModeTwo-text font-extrabold">
          Sluch<span className="font-bold ">.</span>
        </Link>
        <ul className="hidden md:flex gap-8 uppercase text-ModeOne-secondary dark:text-ModeTwo-third items-center text-[10px] items font-semibold">
          {links.map((link, index) => (
            <Link href={`/${link}`} key={index} className={`hover:text-ModeOne-text dark:hover:text-ModeTwo-text ${pathname === `/${link}` ? "text-ModeOne-text dark:text-ModeTwo-text" : ""}`}>
              {link}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-4 text-ModeOne-text dark:text-ModeTwo-text text-2xl">
          <div className="relative">
            {isUserLoggedIn ? (
              <div className="flex items-center gap-2">
                <Image onClick={() => setIsMenuOpen(!isMenuOpen)} src={user.profilePhoto.url} alt="Photo" width={30} height={30} className="rounded-full" />
                <div className={`absolute top-[30px] text-ModeOne-text dark:text-ModeTwo-text font-bold left-[-140px] rounded-md ${isMenuOpen ? "flex" : "hidden"} items-start flex-col shadow-md dark:shadow-gray-400  bg-ModeOne-primary dark:bg-ModeTwo-primary w-[200px]`}>
                  <span className="w-[200px] hover:bg-ModeOne-third dark:hover:bg-ModeTwo-third transition-all duration-500 text-sm py-3 px-4">Profile</span>
                  <span className="w-[200px] hover:bg-ModeOne-third dark:hover:bg-ModeTwo-third transition-all duration-500 text-sm py-3 px-4">Orders</span>
                  <span className="w-[200px] hover:bg-ModeOne-third dark:hover:bg-ModeTwo-third transition-all duration-500 text-sm py-3 px-4" onClick={logout}>
                    Logout
                  </span>
                </div>
                <Link href="/Cart" className="relative">
                  <span><CiShoppingCart /></span>
                  <div className="w-[17px] h-[17px] rounded-full absolute right-[-10px] -bottom-2 text-xs">
                    <span className="flex items-center justify-center text-center absolute left-[6px]">{numProducts}</span>
                  </div>
                </Link>
              </div>
            ) : (
              <Link href="/Login" className="flex items-center gap-2">
                <span><CiUser /></span>
              </Link>
            )}
          </div>

          <span onClick={() => setIsNavMobileOpen(!isNavMobileOpen)} className="flex md:hidden">
            <CiMenuFries />
          </span>
          <span
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-3xl text-MODE1-third dark:text-MODE2-third"
          >
            {isDarkMode ? <CiLight /> : <CiDark />}
          </span>

        </div>
      </div>
          <div className={`${isNavMobileOpen ? "flex" : "hidden"} flex-col items-start w-full bg-[#eaeaea]`}>   
              {links.map((link, index) => (
                <Link href={`/${link}`} key={index} className={`hover:text-ModeOne-text uppercase dark:hover:text-ModeTwo-text p-3 ${pathname === `/${link}` ? "text-ModeOne-text dark:text-ModeTwo-text" : ""}`}>
                  {link}
                </Link>
              ))}
          </div>
          

    </div>
  );
};

export default Nav