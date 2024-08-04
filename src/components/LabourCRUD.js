"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LabourCRUD = ({ start, end, companyName }) => {
  const [labourData, setLabourData] = useState([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [labourToDelete, setLabourToDelete] = useState(null);
  const router = useRouter();

  const fetchLabourData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://hrportalmiddleware.onrender.com/api/labour/labour/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLabourData(response.data.result);
    } catch (error) {
      console.error("Error fetching labour data:", error);
    }
  };

  useEffect(() => {
    fetchLabourData();
  }, []);

  const handleDelete = async () => {
    let token = localStorage.getItem("token");
    try {
      await axios.delete(
        `https://hrportalmiddleware.onrender.com/api/labour/labour/delete?labourid=${labourToDelete}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowConfirmDelete(false);
      setLabourToDelete(null);
      fetchLabourData();
    } catch (error) {
      console.error("Error deleting labour:", error);
    }
  };

  const handleView = (labourId) => {
    router.push(`/labour/${labourId}`);
  };

  const handleUpdate = (labourId) => {
    router.push(`/labour/edit/${labourId}`);
  };

  const handleCreate = () => {
    router.push(`/labour/create`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl text-center text-white">{companyName}</h1>
        <div className="text-white">
          <p>
            <span className="font-bold">Subscription Start Date:</span> {start}
          </p>
          <p>
            <span className="font-bold">Subscription End Date:</span> {end}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleCreate}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Create Labour
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-800 text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Work Site</th>
            <th className="py-2 px-4">Reminder</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {labourData.map((labour) => (
            <tr key={labour.id} className="border-b">
              <td className="py-2 px-4 text-center">{labour.name}</td>
              <td className="py-2 px-4 text-center">{labour.customer}</td>
              <td className="py-2 px-4 text-center">{labour.workSite}</td>
              <td className="py-2 px-4 text-center">{labour.reminder}</td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => handleView(labour.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  View
                </button>
                <button
                  onClick={() => handleUpdate(labour.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setShowConfirmDelete(true);
                    setLabourToDelete(labour.id);
                  }}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <p>Are you sure you want to delete this labour?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirmDelete(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabourCRUD;
