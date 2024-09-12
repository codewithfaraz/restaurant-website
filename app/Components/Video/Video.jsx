import Image from "next/image";
export default function Video() {
  return (
    <div className="md:py-32 py-16 relative px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute w-[100%] h-[100%] bg-black/90 flex items-center justify-center">
            <h1 className="text-white text-center px-4 text-4xl md:text-6xl md:w-[50%] md:px-0">
              Feel the authentic & original taste from us
            </h1>
          </div>
          <video
            src="/Videos/about-section-video.mp4"
            autoPlay
            muted
            loop
            className=""
          ></video>
        </div>
        <div className="p-12 flex flex-col space-y-6 md:flex-row md:space-y-0">
          <div className="flex space-x-2">
            <Image
              src="/Icons/multi-cuisine-icon.png"
              width={100}
              height={12}
            />
            <div className="flex flex-col ">
              <h1 className="font-bold text-[#2C2F24]">Multi Cuisine</h1>
              <p className="text-[#414536]">
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Image src="/Icons/easy-order-icon.png" width={100} height={12} />
            <div className="flex flex-col ">
              <h1 className="font-bold text-[#2C2F24]">Easy To Order</h1>
              <p className="text-[#414536]">
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Image
              src="/Icons/fast-delivery-icon.png"
              width={100}
              height={12}
            />
            <div className="flex flex-col ">
              <h1 className="font-bold text-[#2C2F24]">Fast Delivery</h1>
              <p className="text-[#414536]">
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
