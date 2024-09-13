import { TextField, Select, MenuItem } from "@mui/material";
export default function BookTable() {
  return (
    <div className="md:pt-32 pt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-3 md:px-0">
        <h1 className="text-[#2C2F24] md:text-8xl text-4xl">Book A Table</h1>
        <p className="text-[#495460] w-[500px] text-center md:px-0 px-4">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
        <div className="w-full">
          <form
            action=""
            className="bg-white border border-[#e7e5e5] max-w-4xl mx-auto grid grid-cols-2 p-3 md:p-6 gap-3"
          >
            <div>
              <label htmlFor="" className="font-bold px-2 mb-3 inline-block">
                Date
              </label>
              <TextField
                variant="outlined"
                type="date"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="font-bold px-2 mb-3 inline-block">
                Time
              </label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                className="w-full"
              >
                <MenuItem value={10} selected>
                  6:30 PM
                </MenuItem>
                <MenuItem value={20}>7:30 PM</MenuItem>
                <MenuItem value={30}>8:30 PM</MenuItem>
              </Select>
            </div>
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
                Phone
              </label>
              <TextField
                variant="outlined"
                type="phone"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="font-bold px-2 mb-3 inline-block">
                Total Person
              </label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                className="w-full"
              >
                <MenuItem value={10} selected>
                  1
                </MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </div>
            <button className="text-white bg-[#AD343E] rounded-full px-10  py-6 mt-3 col-span-2 font-bold">
              Book A table
            </button>
          </form>
        </div>
        <div className="w-full h-96 bg-map-image"></div>
      </div>
    </div>
  );
}
