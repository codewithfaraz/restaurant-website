import { TextField, Select, MenuItem } from "@mui/material";
export default function Contact() {
  return (
    <div className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto">
        <form
          action=""
          className="bg-white border border-[#e7e5e5] max-w-4xl mx-auto grid grid-cols-2 p-3 md:p-6 gap-3"
        >
          <div>
            <label htmlFor="" className="font-bold px-2 mb-3 inline-block">
              Name
            </label>
            <TextField
              variant="outlined"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="" className="font-bold px-2 mb-3 inline-block">
              Email
            </label>
            <TextField
              variant="outlined"
              type="email"
              required
              className="w-full"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="font-bold px-2 mb-3 inline-block">
              Subject
            </label>
            <TextField
              variant="outlined"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div className="w-full col-span-2">
            <label htmlFor="" className="font-bold px-2 mb-3 inline-block">
              Message
            </label>
            <TextField
              variant="outlined"
              type="text"
              required
              className="w-full"
            />
          </div>
          <button className="text-white bg-[#AD343E] rounded-full px-10  py-6 mt-3 col-span-2 font-bold">
            Send
          </button>
        </form>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 md:w-[550px] mx-auto mt-12  text-center md:text-left">
          <div className="flex-1">
            <h1 className="font-bold text-[#2C2F24]">Call Us:</h1>
            <p className="text-[#AD343E] font-bold">+923246827267</p>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-[#2C2F24]">Hours:</h1>
            <p>Mon-Fri: 11am - 8pm Mon-Fri: 11am - 8pm</p>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-[#2C2F24]">Our Location:</h1>
            <p className="text-[#AD343E] font-bold">
              123 Bridge Street Nowhere Land, LA 12345 United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
