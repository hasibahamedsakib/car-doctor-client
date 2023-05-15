import { Card } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const SingleService = ({ service }) => {
  const { img, title, price, _id } = service;

  return (
    <div className="max-w-sm mt-5">
      <Card imgSrc={img}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <div className="text-orange-500 font-bold flex justify-between">
          <p> Price : ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <HiArrowRight className="w-6 h-5 font-bold cursor-pointer" />
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SingleService;
