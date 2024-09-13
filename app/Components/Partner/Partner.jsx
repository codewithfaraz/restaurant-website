import Image from "next/image";
export default function Partner() {
  return (
    <div className="md:py-32 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:px-0 px-6 md:space-y-0 space-y-4 ">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl text-[#2C2F24] md:text-left text-center">
            You can order through apps
          </h1>
          <p className="text-[#414536] w-96 mt-6 md:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 flex-1">
          <Image
            src="/Icons/partner-icon1.png"
            width={120}
            height={32}
            className=""
          />
          <Image
            src="/Icons/partner-icon2.png"
            width={120}
            height={32}
            className=""
          />
          <Image
            src="/Icons/partner-icon3.png"
            width={120}
            height={32}
            className=""
          />
          <Image
            src="/Icons/partner-icon4.png"
            width={120}
            height={32}
            className=""
          />
          <Image
            src="/Icons/partner-icon5.png"
            width={120}
            height={32}
            className=""
          />
          <Image
            src="/Icons/partner-icon6.png"
            width={120}
            height={32}
            className=""
          />
          <Image
            src="/Icons/partner-icon7.png"
            width={120}
            height={32}
            className=""
          />
          <Image
            src="/Icons/partner-icon8.png"
            width={120}
            height={32}
            className=""
          />
          <Image
            src="/Icons/partner-icon9.png"
            width={120}
            height={32}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
