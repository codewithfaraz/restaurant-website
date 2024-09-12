import Image from "next/image";
export default function BlogSection() {
  return (
    <div className="md:py-32 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center md:justify-between">
          <h1 className="text-4xl md:text-6xl text-[#2C2F24]">
            Our Blog & Articles
          </h1>
          <button className="text-white bg-[#AD343E] rounded-full px-10 hidden md:block">
            Read All Articles
          </button>
        </div>
        <div className="flex mt-12 flex-col px-2 md:px-0 md:flex-row">
          <div className="">
            <Image
              src="/Images/blog-section-image1.png"
              width={550}
              height={100}
            />
            <div className="p-4 mt-12 md:w-[80%] space-y-4">
              <p className="text-[#737865]">January 3, 2023</p>
              <h1 className="text-[#2C2F24] font-bold text-2xl">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </h1>
              <p className="text-[#414536]">
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-6">
            <div className="bg-[#f1eeee] p-4">
              <Image
                src="/Images/blog-section-image4.png"
                width={300}
                height={300}
              />
              <div className="p-3">
                <p className="text-[#737865]">January 3, 2023</p>
                <h1 className="text-[#2C2F24] font-bold">
                  How to prepare the perfect french fries in an air fryer
                </h1>
              </div>
            </div>
            <div className="bg-[#f1eeee] p-4">
              <Image
                src="/Images/blog-section-image5.png"
                width={300}
                height={300}
              />
              <div className="p-3">
                <p className="text-[#737865]">January 3, 2023</p>
                <h1 className="text-[#2C2F24] font-bold">
                  How to prepare delicious chicken tenders
                </h1>
              </div>
            </div>
            <div className="bg-[#f1eeee] p-4">
              <Image
                src="/Images/blog-section-image3.png"
                width={300}
                height={300}
              />
              <div className="p-3">
                <p className="text-[#737865]">January 3, 2023</p>
                <h1 className="text-[#2C2F24] font-bold">
                  7 delicious cheesecake recipes you can prepare
                </h1>
              </div>
            </div>
            <div className="bg-[#f1eeee] p-4">
              <Image
                src="/Images/blog-section-image2.png"
                width={300}
                height={300}
              />
              <div className="p-3">
                <p className="text-[#737865]">January 3, 2023</p>
                <h1 className="text-[#2C2F24] font-bold">
                  5 great pizza restaurants you should visit this city
                </h1>
              </div>
            </div>
          </div>
          {/* button here */}
          <button className="text-white bg-[#AD343E] rounded-full px-10 md:hidden block py-6 mt-3">
            Read All Articles
          </button>
        </div>
      </div>
    </div>
  );
}
