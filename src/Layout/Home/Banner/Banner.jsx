import { Carousel } from "flowbite-react";
const banner2 = "https://i.ibb.co/GnQpcJ7/2.jpg";
const banner3 = "https://i.ibb.co/tJ8NMSW/3.jpg";
const banner4 = "https://i.ibb.co/BBfMHzW/4.jpg";
const banner5 = "https://i.ibb.co/ZHCJY90/5.jpg";
const banner1 = "https://i.ibb.co/CzW2RFr/1.jpg";

const Banner = () => {
  return (
    <div className="h-[600px] py-5">
      <Carousel className="h-full" slide={false}>
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: ` linear-gradient(to right ,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${banner1})`,
          }}
        >
          <div className=" h-full   flex place-content-center pl-20 flex-col text-white space-y-5">
            <h1 className="text-5xl font-bold w-[350px] leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 items-center">
              <button className=" border-2 font-semibold border-orange-500 px-4 py-2 rounded-md bg-orange-500 text-white duration-200">
                Discover More
              </button>
              <button className="text-white border-2 font-semibold border-white px-4 py-2 rounded-md ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: ` linear-gradient(to right ,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${banner2})`,
          }}
        >
          <div className=" h-full   flex place-content-center pl-20 flex-col text-white space-y-5">
            <h1 className="text-5xl font-bold w-[350px] leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 items-center">
              <button className=" border-2 font-semibold border-orange-500 px-4 py-2 rounded-md bg-orange-500 text-white duration-200">
                Discover More
              </button>
              <button className="text-white border-2 font-semibold border-white px-4 py-2 rounded-md ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: ` linear-gradient(to right ,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${banner3})`,
          }}
        >
          <div className=" h-full   flex place-content-center pl-20 flex-col text-white space-y-5">
            <h1 className="text-5xl font-bold w-[350px] leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 items-center">
              <button className=" border-2 font-semibold border-orange-500 px-4 py-2 rounded-md bg-orange-500 text-white duration-200">
                Discover More
              </button>
              <button className="text-white border-2 font-semibold border-white px-4 py-2 rounded-md ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: ` linear-gradient(to right ,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${banner4})`,
          }}
        >
          <div className=" h-full   flex place-content-center pl-20 flex-col text-white space-y-5">
            <h1 className="text-5xl font-bold w-[350px] leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 items-center">
              <button className=" border-2 font-semibold border-orange-500 px-4 py-2 rounded-md bg-orange-500 text-white duration-200">
                Discover More
              </button>
              <button className="text-white border-2 font-semibold border-white px-4 py-2 rounded-md ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: ` linear-gradient(to right ,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${banner5})`,
          }}
        >
          <div className=" h-full   flex place-content-center pl-20 flex-col text-white space-y-5">
            <h1 className="text-5xl font-bold w-[350px] leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-[450px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex space-x-4 items-center">
              <button className=" border-2 font-semibold border-orange-500 px-4 py-2 rounded-md bg-orange-500 text-white duration-200">
                Discover More
              </button>
              <button className="text-white border-2 font-semibold border-white px-4 py-2 rounded-md ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
