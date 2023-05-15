import { Button, TextInput, Textarea } from "flowbite-react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const Checkout = () => {
  const { user } = useContext(AuthContext);

  const services = useLoaderData();
  const { title, price, img } = services;

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const date = event.target.date.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const allServices = {
      title,
      price,
      img,
      firstName,
      lastName,
      email,
      date,
      message,
    };
    console.log(services);

    fetch(`http://localhost:3001/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allServices),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Services added");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 container bg-[#f4f3f0] my-14 p-10"
    >
      <div className=" text-center py-6 font-Pacifico">
        <h2 className="text-3xl ">{title}</h2>
        <h2 className="text-3xl ">{price}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 space-y-2">
        <div>
          <TextInput
            id="name"
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            required={true}
            shadow={true}
            defaultValue={user?.displayName || "username"}
          />
        </div>
        <div>
          <TextInput
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter lastName"
            required={true}
            shadow={true}
            defaultValue={user?.displayName || "username"}
          />
        </div>
        <div>
          <TextInput
            id="date"
            name="date"
            type="date"
            placeholder="Enter date"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            required={true}
            shadow={true}
            defaultValue={user?.email || "user email"}
          />
        </div>
      </div>
      <div>
        <Textarea
          id="comment"
          placeholder="Your Message..."
          required={true}
          rows={4}
          name="message"
        />
      </div>
      <Button type="submit">Order Confirm</Button>
    </form>
  );
};

export default Checkout;
