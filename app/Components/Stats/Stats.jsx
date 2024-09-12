import Image from "next/image";
export default function Stats() {
  return (
    <div className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col space-y-5 md:space-x-12 md:flex-row-reverse p-3 md:p-0 md:space-y-0">
        <div className="">
          <Image
            src="/Images/stats-section-image.png"
            width={900}
            height={600}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="">
            <h1 className="text-[#2C2F24] text-4xl md:text-6xl">
              A little information for our valuable guest
            </h1>
            <p className="text-[#414536] mt-6">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-6">
            <div className="">
              <h1 className="text-4xl text-[#2C2F24] font-bold">3</h1>
              <p className="text-[#414536]">Locations</p>
            </div>
            <div className="">
              <h1 className="text-4xl text-[#2C2F24] font-bold">1995</h1>
              <p className="text-[#414536]">Founded</p>
            </div>
            <div className="">
              <h1 className="text-4xl text-[#2C2F24] font-bold">65+</h1>
              <p className="text-[#414536]">Staff Members</p>
            </div>
            <div className="">
              <h1 className="text-4xl text-[#2C2F24] font-bold">100%</h1>
              <p className="text-[#414536]">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
