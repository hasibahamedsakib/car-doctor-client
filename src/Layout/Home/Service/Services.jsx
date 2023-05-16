import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-green-five.vercel.app/services/")
      .then((res) => res.json())
      .then((service) => setServices(service));
  }, []);
  return (
    <div className="my-5">
      <div className="text-center py-5 ">
        <p className="text-orange-500 font-bold">Service</p>
        <h2 className="font-bold py-3 text-4xl">Our Service Area</h2>
        <p className="text-sm">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <SingleService key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
