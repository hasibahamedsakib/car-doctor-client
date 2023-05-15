import { Button, Table } from "flowbite-react";

const Booking = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, date, email, price, img, title } = booking;

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {title}
      </Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{date}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
      <Table.Cell>
        <img src={img} className="w-20 h-20 rounded-md" alt="" />{" "}
      </Table.Cell>
      <Table.Cell>
        <Button onClick={() => handleDelete(_id)} pill={true} color="light">
          x
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button onClick={() => handleConfirm(_id)} pill={true}>
          confirm
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Booking;
