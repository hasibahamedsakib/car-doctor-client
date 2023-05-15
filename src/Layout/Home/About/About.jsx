import { Card } from "flowbite-react";
const Parts = "https://i.ibb.co/cbRvn8S/parts.jpg";
const Person = "https://i.ibb.co/19NpBy8/person.jpg";
const About = () => {
  return (
    <Card className="">
      <div className="flex flex-col md:flex-row md:justify-between h-fit lg:h-[480px]">
        <div className=" md:w-1/2 ">
          <div
            className=" w-[420px] h-[400px]  bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Person})` }}
          >
            <div className="">
              <img
                src={Parts}
                className="w-64  border-8 border-white rounded-md absolute top-80 left-56"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 p-3 ">
          <p className="font-bold text-orange-500 ">About Us</p>
          <h2 className="text-4xl font-semibold py-3">
            We are qualified & of experience in this field
          </h2>
          <p className="text-slate-700 text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.{" "}
          </p>
          <p className="text-slate-700 text-sm py-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <button className=" border-2 font-semibold border-orange-500 px-4 py-2 rounded-md bg-orange-500 text-white duration-200">
            Get More Info
          </button>
        </div>
      </div>
    </Card>
  );
};

export default About;
