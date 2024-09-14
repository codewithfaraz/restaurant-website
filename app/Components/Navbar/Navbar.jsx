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
                  path === "/" || path === "/book-table"
                    ? "bg-[#DBDFD0] font-bold"
                    : ""
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
              <Link
                href="/blog"
                className={`text-[#2C2F24] ${
                  path === "/blog" ? "bg-[#DBDFD0] font-bold" : ""
                } rounded-3xl px-2 py-1 `}
              >
                Pages
              </Link>
              <Link
                href="/contact"
                className={`text-[#2C2F24] ${
                  path === "/contact" ? "bg-[#DBDFD0] font-bold" : ""
                } rounded-3xl px-2 py-1 `}
              >
                Contact
              </Link>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <Link
            href="/book-table"
            className="text-[#182226] px-4 py-2 rounded-full border-2 border-black"
          >
            Book A Table
          </Link>
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
              <Link href="/" className="font-bold border-b-2 border-white">
                Home
              </Link>
              <Link href="/about" className="">
                About
              </Link>
              <Link href="/menu" className="">
                Menu
              </Link>
              <Link href="/blog" className="">
                Pages
              </Link>
              <Link href="/contact" className="">
                Contact
              </Link>
              <Link
                href="/book-table"
                className=" px-4 py-2 rounded-full border-2 border-white"
              >
                Book A Table
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
