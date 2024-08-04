"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import TextInput from "./TextInput";

const EditLaborForm = ({ labourId }) => {
  const router = useRouter();
  const [data, setData] = useState({
    id: labourId,
    name: "",
    customer: "",
    lcat: "",
    workSite: "",
    chargeCode: "",
    reminderDays: "",
    reminder: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchLaborData = async () => {
      try {
        const response = await axios.get(
          `https://hrportalmiddleware.onrender.com/api/labour/labour/single?Labourid=${labourId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data.result);
      } catch (error) {
        axios;
        console.error("Error fetching labor data", error);
      }
    };
    fetchLaborData();
  }, [labourId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        "https://hrportalmiddleware.onrender.com/api/labour/labour/info/update",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Labor info updated successfully:", response.data.result);
      router.push("/dashboard"); // Redirect to dashboard after successful update
    } catch (error) {
      alert("Error updating labor info:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Edit Labor Information</h2>
      <TextInput
        label="Name"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <TextInput
        label="Customer"
        name="customer"
        value={data.customer}
        onChange={handleChange}
      />
      <TextInput
        label="LCAT"
        name="lcat"
        value={data.lcat}
        onChange={handleChange}
      />
      <TextInput
        label="Work Site"
        name="workSite"
        value={data.workSite}
        onChange={handleChange}
      />
      <TextInput
        label="Charge Code"
        name="chargeCode"
        value={data.chargeCode}
        onChange={handleChange}
      />
      <TextInput
        label="Reminder Days"
        name="reminderDays"
        value={data.reminderDays}
        onChange={handleChange}
      />
      <TextInput
        label="Reminder"
        name="reminder"
        value={data.reminder}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="py-2 px-4 bg-green-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default EditLaborForm;
