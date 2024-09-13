import Image from "next/image";
export default function Recepie({
  img,
  price,
  recepieName,
  recepieDescription,
}) {
  return (
    <div className="border border-[#DBDFD0] rounded-lg flex flex-col items-center pb-4">
      <Image src={img} width={300} height={300} />
      <div className="flex flex-col items-center mt-6 space-y-3">
        <p className="text-[#AD343E] text-2xl font-bold">${price}</p>
        <h1 className="text-2xl text-[#2C2F24] font-bold">{recepieName}</h1>
        <p className="text-[#414536] w-64 text-center">{recepieDescription}</p>
      </div>
    </div>
  );
}
