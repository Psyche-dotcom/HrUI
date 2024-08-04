import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";

const AssignLabour = ({ id }) => {
  const router = useRouter();
  const [labours, setLabours] = useState([]);
  const [selectedLabourId, setSelectedLabourId] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchLabours = async () => {
    try {
      let token = localStorage.getItem("token");
      const response = await axios.get(
        "https://hrportalmiddleware.onrender.com/api/labour/labour/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLabours(response.data.result);
    } catch (error) {
      console.error("Error fetching labours:", error);
    }
  };

  useEffect(() => {
    fetchLabours();
  }, []);

  const handleAssign = async () => {
    if (!selectedLabourId) return;

    setLoading(true);
    let token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "https://hrportalmiddleware.onrender.com/api/company/staff/assign",
        {
          staffId: id,
          labourId: selectedLabourId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.statusCode === 200) {
        alert("Staff assigned to new labour successfully");
        router.push(`/staff/${id}`);
      } else {
        alert("Failed to assign labour");
      }
    } catch (error) {
      console.error("Error assigning labour:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Assign Labour</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Select Labour:</label>
        <select
          value={selectedLabourId}
          onChange={(e) => setSelectedLabourId(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">Select a labour</option>
          {labours.map((labour) => (
            <option key={labour.id} value={labour.id}>
              {labour.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleAssign}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Assign
      </button>
    </div>
  );
};

export default AssignLabour;
