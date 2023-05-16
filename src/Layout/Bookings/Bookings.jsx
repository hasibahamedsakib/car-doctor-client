import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Booking from "./Booking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3001/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("user-jwt-token")}`,
      },
    })
      .then((res) => res.json())
      .then((booking) => setBookings(booking));
  }, [url]);

  const handleDelete = (id) => {
    const ok = confirm("are you sure to want delete this item?");
    if (ok) {
      fetch(`http://localhost:3001/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            alert("Successfully deleted one document.");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleConfirm = (id) => {
    const ok = confirm("if you want to confirm this service?");
    if (ok) {
      fetch(`http://localhost:3001/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
            alert("Successfully update a document.");
            const remaining = bookings.filter((booking) => booking._id !== id);
            const updated = bookings.find((booking) => booking._id === id);
            updated.status = "confirm";
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white w-full py-20 px-5 rounded-lg text-3xl font-bold text-center">
        All Bookings are ...{bookings.length}
      </h1>

      <Table hoverable={true} className="border-2 mt-10">
        <Table.Head>
          <Table.HeadCell>service name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>image</Table.HeadCell>
          <Table.HeadCell>remove</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {bookings.map((bk) => (
            <Booking
              booking={bk}
              handleDelete={handleDelete}
              key={bk._id}
              handleConfirm={handleConfirm}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Bookings;
