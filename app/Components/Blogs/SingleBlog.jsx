import Image from "next/image";
export default function SingleBlog({ img, date_time, title }) {
  return (
    <div className="p-3 border border-[#e6e2e2] flex flex-col justify-center">
      <Image src={img} width={300} height={300} />
      <div className="w-72 p-3">
        <p className="text-[#737865]">{date_time}</p>
        <h1 className="font-semibold text-[#2C2F24]">{title}</h1>
      </div>
    </div>
  );
}
