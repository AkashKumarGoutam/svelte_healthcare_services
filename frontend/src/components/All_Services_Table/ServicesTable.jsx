import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ServicesTable() {
  const [Services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/services/getServices")
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Services]);

  const handleDeleteServices = async (id) => {
    await axios
      .delete(`http://localhost:3001/services/deleteServices/${id}`)
      .then((res) => {
        console.log(res);
        setServices(Services.filter((service) => service._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="px-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="lg:px-6 lg:py-3">
              Name
            </th>
            <th scope="col" className="lg:px-6 lg:py-3">
              Description
            </th>
            <th scope="col" className="lg:px-6 lg:py-3">
              Price
            </th>
            <th scope="col" className="lg:px-6 lg:py-3">
              Edit
            </th>
            <th scope="col" className="lg:px-6 lg:py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {Services.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="lg:px-6 lg:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="lg:px-6 lg:py-4">
                <div
                  className="lg:w-48 p-2 overflow-y-auto"
                  style={{ wordBreak: "break-word", whiteSpace: "normal" }}
                >
                  {item.description}
                </div>
              </td>
              <td className="lg:px-6 lg:py-4">{item.price}</td>
              <td className="lg:px-6 lg:py-4">
                <Link
                  to={`edit_services/${item._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </Link>
              </td>
              <td className="lg:px-6 lg:py-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleDeleteServices(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServicesTable;
