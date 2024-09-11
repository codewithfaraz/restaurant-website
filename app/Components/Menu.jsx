import Image from "next/image";
export default function Menu() {
  return (
    <div className="py-32 ">
      <div className="max-w-6xl mx-auto flex items-center justify-center flex-col space-y-12">
        <h1 className="text-4xl md:text-6xl text-[#2C2F24] text-center ">
          Browse Our Menu
        </h1>
        <div className="flex md:space-x-3 space-y-3 md:space-y-0 md:flex-row flex-col">
          <div className="hover:-translate-y-2 transition flex flex-col items-center justify-center border border-[#DBDFD0] py-16 px-12 md:px-2 space-y-3">
            <Image src="/Images/breakfast-icon.png" width={60} height={60} />
            <h1 className="text-[#2C2F24] font-bold">Breakfast</h1>
            <p className="text-[#2C2F24] text-center w-56">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <a href="" className="text-[#AD343E] font-semibold">
              Explore Menu
            </a>
          </div>
          <div className="hover:-translate-y-2 transition flex flex-col items-center justify-center border border-[#DBDFD0] py-16 px-12 md:px-2 space-y-3">
            <Image src="/Images/main-dishes-icon.png" width={60} height={60} />
            <h1 className="text-[#2C2F24] font-bold">Main Dishes</h1>
            <p className="text-[#2C2F24] text-center w-56">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <a href="" className="text-[#AD343E] font-semibold">
              Explore Menu
            </a>
          </div>
          <div className="hover:-translate-y-2 transition flex flex-col items-center justify-center border border-[#DBDFD0] py-16 px-12 md:px-2 space-y-3">
            <Image src="/Images/drinks-icon.png" width={60} height={60} />
            <h1 className="text-[#2C2F24] font-bold">Drinks</h1>
            <p className="text-[#2C2F24] text-center w-56">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <a href="" className="text-[#AD343E] font-semibold">
              Explore Menu
            </a>
          </div>
          <div className="hover:-translate-y-2 transition flex flex-col items-center justify-center border border-[#DBDFD0] py-16 px-12 md:px-2 space-y-3">
            <Image src="/Images/desserts-icon.png" width={60} height={60} />
            <h1 className="text-[#2C2F24] font-bold">Desserts</h1>
            <p className="text-[#2C2F24] text-center w-56">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <a href="" className="text-[#AD343E] font-semibold">
              Explore Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
