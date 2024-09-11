import Image from "next/image";
export default function Reviews() {
  return (
    <div className="md:py-32 py-16">
      <div className="max-w-6xl mx-auto px-12 md:px-0">
        <h1 className="text-4xl md:text-6xl text-center text-[#2C2F24]">
          What Our Customers Say
        </h1>
        <div className="flex flex-col md:flex-row space-y-12 md:space-x-12 md:space-y-0 mt-12">
          <div className="px-3 space-y-3 border border-[#DBDFD0] p-3 flex flex-col items-center md:items-start">
            <h1 className="text-[#AD343E] font-bold">“The best restaurant”</h1>
            <p className="text-[#414536]">
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="flex">
              <Image src="/Images/review-image1.png" width={50} height={30} />
              <div className="px-3">
                <h1 className="text-[#2C2F24] font-semibold">Sophire Robson</h1>
                <p className="text-[#414536]">Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div className="px-3 space-y-3 border border-[#DBDFD0] p-3 flex flex-col items-center md:items-start">
            <h1 className="text-[#AD343E] font-bold">“Simply delicious”</h1>
            <p className="text-[#414536]">
              Place exceeded my expectations on all fronts. The ambiance was
              cozy and relaxed, making it a perfect venue for our anniversary
              dinner. Each dish was prepared and beautifully presented.
            </p>
            <div className="flex">
              <Image src="/Images/review-image2.png" width={50} height={30} />
              <div className="px-3">
                <h1 className="text-[#2C2F24] font-semibold">Matt Cannon</h1>
                <p className="text-[#414536]">San Diego, CA</p>
              </div>
            </div>
          </div>
          <div className="px-3 space-y-3 border border-[#DBDFD0] p-3 flex flex-col items-center md:items-start">
            <h1 className="text-[#AD343E] font-bold">
              “One of a kind restaurant”
            </h1>
            <p className="text-[#414536]">
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food - nothing short of extraordinary. The food
              was the highlight of our evening. Highly recommended.
            </p>
            <div className="flex">
              <Image src="/Images/review-image1.png" width={50} height={30} />
              <div className="px-3">
                <h1 className="text-[#2C2F24] font-semibold">Andy Smith</h1>
                <p className="text-[#414536]">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
