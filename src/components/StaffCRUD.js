"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const StaffCRUD = ({ start, end, companyName }) => {
  const [staffData, setStaffData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);
  const router = useRouter();

  const fetchStaffData = async (pageNumber = 1) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://hrportalmiddleware.onrender.com/api/company/staff/all?per_page_size=5&page_number=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStaffData(response.data.result.result);
      setCurrentPage(response.data.result.currentPage);
      setTotalPages(response.data.result.totalPages);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };

  useEffect(() => {
    fetchStaffData();
  }, []);

  const handleDelete = async () => {
    let token = localStorage.getItem("token");
    try {
      await axios.delete(
        `https://hrportalmiddleware.onrender.com/api/company/staff/delete?staffid=${staffToDelete}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowConfirmDelete(false);
      setStaffToDelete(null);
      fetchStaffData(currentPage);
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const handleView = (staffId) => {
    router.push(`/staff/${staffId}`);
  };

  const handleUpdate = (staffId) => {
    router.push(`/staff/edit/${staffId}`);
  };
  const handleCreate = () => {
    router.push(`/staff/create`);
  };
  const handleCreateLabout = () => {
    router.push(`/labour/create`);
  };

  return (
    <div className="p-4">
      <div className="flex  justify-between mb-6">
        <h1 className="text-3xl text-center text-white">{companyName}</h1>
        <div className="text-white">
          <p>
            <span className="font-bold">Subscrption Start Date :</span> {start}
          </p>
          <p>
            <span className="font-bold">Subscrption End Date :</span> {end}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => handleCreate()}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Create Staff
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-800 text-white">
            <th className="py-2 px-4">Full Name</th>
            <th className="py-2 px-4">Email</th>

            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff) => (
            <tr key={staff.id} className="border-b">
              <td className="py-2 px-4 text-center">{staff.fullName}</td>
              <td className="py-2 px-4 text-center">{staff.email}</td>

              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => handleView(staff.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  View
                </button>
                <button
                  onClick={() => handleUpdate(staff.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setShowConfirmDelete(true);
                    setStaffToDelete(staff.id);
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

      <div className="flex justify-between mt-4">
        {currentPage > 1 && (
          <button
            onClick={() => fetchStaffData(currentPage - 1)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => fetchStaffData(currentPage + 1)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>

      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <p>Are you sure you want to delete this staff?</p>
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

export default StaffCRUD;
