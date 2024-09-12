import Image from "next/image";
export default function Delivery() {
  return (
    <div className="md:py-32 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-6 md:px-0">
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <Image
            src="/Images/delivery-image3.png"
            width={300}
            height={300}
            className="row-span-2"
          />
          <Image src="/Images/delivery-image2.png" width={300} height={300} />
          <Image src="/Images/delivery-image1.png" width={300} height={300} />
        </div>
        <div className="flex flex-col justify-center md:px-24  space-y-3 text-center items-center md:items-start md:text-left">
          <h1 className="text-[#2C2F24] md:text-6xl text-4xl">
            Fastest Food Delivery in City
          </h1>
          <p className="text-[#414536]">
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.{" "}
          </p>
          <div className="mt-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/Icons/clock-icon.png"
                width={20}
                height={20}
                className=" bg-[#AD343E] rounded-full"
              />
              <h1 className="text-[#2C2F24]">Delivery within 30 minutes</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/Icons/receipt-tax-icon.png"
                width={20}
                height={20}
                className="bg-[#AD343E] rounded-full"
              />
              <h1 className="text-[#2C2F24]">Best Offer & Prices</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/Icons/shopping-cart-icon.png"
                width={20}
                height={20}
                className="bg-[#AD343E] rounded-full"
              />
              <h1 className="text-[#2C2F24]">Online Services Available</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
