import Image from "next/image";
export default function About() {
  return (
    <div className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto flex items-center md:flex-row flex-col space-y-6 md:space-y-0">
        <Image src="/Images/about-image.png" width={500} height={500} />
        <div className="flex  flex-col px-6 md:px-12 md:items-start space-y-4 items-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-[#2C2F24]">
            We provide healthy food for your family.
          </h1>
          <p className="text-[#2C2F24] font-semibold">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p className="text-[#414536]">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <button className="text-[#182226] px-4 py-2 rounded-full border-2 border-black">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
