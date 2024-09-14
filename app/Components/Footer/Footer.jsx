import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="py-12 bg-[#474747]">
      <div className="space-y-6 md:space-y-0 max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left md:items-baseline md:space-x-12 ">
        <div className="space-y-6 md:w-[40%] flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <Image src="/Images/footer-logo.png" width={40} height={40} />
            <Link href="/" className="text-white font-bold">
              Bistro Bliss
            </Link>
          </div>
          <p className="text-[#ADB29E] md:w-[60%] w-[70%]">
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </p>
          <div className="flex space-x-3">
            <Image
              src="/Icons/twitter-icon.png"
              width={14}
              height={14}
              className="bg-[#AD343E] p-4 w-12 h-12 rounded-full"
            />
            <Image
              src="/Icons/facebook-icon.png"
              width={14}
              height={14}
              className="bg-[#AD343E] p-4 w-12 h-12 rounded-full"
            />
            <Image
              src="/Icons/github-icon.png"
              width={14}
              height={14}
              className="bg-[#AD343E] p-4 w-12 h-12 rounded-full"
            />
            <Image
              src="/Icons/instagram-icon.png"
              width={14}
              height={14}
              className="bg-[#AD343E] p-4 w-12 h-12 rounded-full"
            />
          </div>
        </div>
        <div className="">
          <h1 className="text-white font-bold">Pages</h1>
          <ul className="flex flex-col space-y-4 mt-6">
            <Link href="/" className="text-[#DBDFD0]">
              Home
            </Link>
            <Link href="/about" className="text-[#DBDFD0]">
              About
            </Link>
            <Link href="/menu" className="text-[#DBDFD0]">
              Menu
            </Link>
            <a href="" className="text-[#DBDFD0]">
              Pricing
            </a>
            <Link href="/blog" className="text-[#DBDFD0]">
              Blog
            </Link>
            <Link href="/contact" className="text-[#DBDFD0]">
              Contact
            </Link>
            <a href="" className="text-[#DBDFD0]">
              Delivery
            </a>
          </ul>
        </div>
        <div className="">
          <h1 className="text-white font-bold">Utility Pages</h1>
          <ul className="flex flex-col space-y-4 mt-6">
            <a href="" className="text-[#DBDFD0]">
              Start Here
            </a>
            <a href="" className="text-[#DBDFD0]">
              Styleguide
            </a>
            <a href="" className="text-[#DBDFD0]">
              Password Protected
            </a>
            <a href="" className="text-[#DBDFD0]">
              404 Not Found
            </a>
            <a href="" className="text-[#DBDFD0]">
              Licenses
            </a>
            <a href="" className="text-[#DBDFD0]">
              Changelog
            </a>
            <a href="" className="text-[#DBDFD0]">
              View More
            </a>
          </ul>
        </div>
        <div className="">
          <h1 className="text-white font-semibold">Follow Us On Instagram</h1>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <Image src="/Images/footer-image1.png" width={220} height={220} />
            <Image src="/Images/footer-image2.png" width={220} height={220} />
            <Image src="/Images/footer-image3.png" width={220} height={220} />
            <Image src="/Images/footer-image4.png" width={220} height={220} />
          </div>
        </div>
      </div>
      <p className="text-center mt-12 text-[#ADB29E]">
        Copyright © 2023 Hashtag Developer. All Rights Reserved
      </p>
    </div>
  );
}
