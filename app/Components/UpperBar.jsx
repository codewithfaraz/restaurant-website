import Image from "next/image";
export default function UpperBar() {
  return (
    <div className="py-2 bg-[#474747]">
      <div className="max-w-6xl mx-auto flex md:justify-between flex-col md:flex-row items-center">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Image src="/Icons/phone-icon.png" width={30} height={30} />
            <p className="text-white">+923246827267</p>
          </div>
          <div className="flex items-center">
            <Image src="/Icons/email-icon.png" width={30} height={30} />
            <p className="text-white">+923246827267</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src="/Icons/twitter-icon.png"
            width={40}
            height={40}
            className="bg-white/20 p-2 rounded-full"
          />

          <Image
            src="/Icons/instagram-icon.png"
            width={40}
            height={40}
            className="bg-white/20 p-2 rounded-full"
          />
          <Image
            src="/Icons/github-icon.png"
            width={40}
            height={40}
            className="bg-white/20 p-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
