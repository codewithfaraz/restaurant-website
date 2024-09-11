import Image from "next/image";
export default function Services() {
  return (
    <div className="py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="md:text-6xl text-4xl text-[#2C2F24] md:w-[65%] md:text-left text-center px-3 md:px-0">
          We also offer unique services for your events
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-12 mt-12 space-y-6 md:space-y-0 items-center justify-center">
          <div className="px-12 md:px-0 ">
            <Image
              src="/Images/services-image3.png"
              width={400}
              height={400}
              className=""
            />
            <div className="px-3 mt-3 text-center md:text-left">
              <h1 className="text-[#2C2F24] font-bold">Caterings</h1>
              <p className="text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          </div>
          <div className="px-12 md:px-0 ">
            <Image src="/Images/services-image4.png" width={400} height={400} />
            <div className="px-3 mt-3 text-center md:text-left">
              <h1 className="text-[#2C2F24] font-bold">Birthdays</h1>
              <p className="text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          </div>
          <div className="px-12 md:px-0 ">
            <Image src="/Images/services-image2.png" width={400} height={400} />
            <div className="px-3 mt-3 text-center md:text-left">
              <h1 className="text-[#2C2F24] font-bold">Weddings</h1>
              <p className="text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          </div>
          <div className="px-12 md:px-0 ">
            <Image src="/Images/services-image1.png" width={400} height={400} />
            <div className="px-3 mt-3 text-center md:text-left">
              <h1 className="text-[#2C2F24] font-bold">Events</h1>
              <p className="text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
