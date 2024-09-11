export default function Hero() {
  return (
    <div className="bg-hero-image h-[80vh] bg-cover bg-center flex justify-center items-center flex-col space-y-3">
      <h1 className="text-[#2C2F24] text-6xl  w-[400px] md:w-[480px] text-center leading-tight uppercase font-semibold">
        Best food for your taste
      </h1>
      <p className="text-[#2C2F24] text-xl md:w-[500px] text-center w-[400px]">
        Discover delectable cuisine and unforgettable moments in our welcoming,
        culinary haven.
      </p>
      <div className="flex space-x-6">
        <button className="text-white bg-[#AD343E] px-4 py-3 rounded-full">
          Book A Table
        </button>
        <button className="text-[#2C2F24] border border-[#2C2F24] px-4 py-3 rounded-full">
          Explore Menu
        </button>
      </div>
    </div>
  );
}
