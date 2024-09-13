"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const path = usePathname();
  const [mobileMenuState, setMobileMenuState] = useState(false);
  return (
    <div className="py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-around">
        <div className="flex items-center">
          <Image
            src="/Images/logo.png"
            width={70}
            height={70}
            className="inline-block"
          />
          <h1 className="text-[#474747] text-xl md:text-3xl font-bold space-x-3">
            Bistro Bliss
          </h1>
        </div>
        {/* full screen menu */}
        <div className="hidden md:block">
          <nav>
            <ul className="space-x-3">
              <Link
                href="/"
                className={`text-[#2C2F24] ${
                  path === "/" ? "bg-[#DBDFD0] font-bold" : ""
                } rounded-3xl px-2 py-1 `}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`text-[#2C2F24] ${
                  path === "/about" ? "bg-[#DBDFD0] font-bold" : ""
                } rounded-3xl px-2 py-1 `}
              >
                About
              </Link>
              <Link
                href="/menu"
                className={`text-[#2C2F24] ${
                  path === "/menu" ? "bg-[#DBDFD0] font-bold" : ""
                } rounded-3xl px-2 py-1 `}
              >
                Menu
              </Link>
              <a href="#" className="text-[#2C2F24]">
                Pages
              </a>
              <a href="#" className="text-[#2C2F24]">
                Contact
              </a>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <button className="text-[#182226] px-4 py-2 rounded-full border-2 border-black">
            Book A Table
          </button>
        </div>
        {/* mobile menu button*/}
        <div className="md:hidden block">
          <p
            className="text-white cursor-pointer text-2xl bg-[#182226] px-4 py-2  rounded-full flex items-center justify-center"
            onClick={() => setMobileMenuState(!mobileMenuState)}
          >
            |||
          </p>
          {/* mobile menu */}
        </div>
        {mobileMenuState && (
          <div className="absolute w-[100%] h-[100%] bg-[#182226] top-0 left-0 md:hidden">
            <p
              className="right-10 top-10 absolute text-black cursor-pointer text-2xl bg-white px-4 py-2  rounded-full flex items-center justify-center"
              onClick={() => setMobileMenuState(!mobileMenuState)}
            >
              |||
            </p>
            <ul className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center space-y-4">
              <a href="" className="font-bold border-b-2 border-white">
                Home
              </a>
              <a href="" className="">
                About
              </a>
              <a href="" className="">
                Menu
              </a>
              <a href="" className="">
                Pages
              </a>
              <a href="" className="">
                Contact
              </a>
              <button className=" px-4 py-2 rounded-full border-2 border-white">
                Book A Table
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
