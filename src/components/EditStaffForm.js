"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { fetchStaffData } from "./fetchStaffData";
import { useRouter } from "next/navigation";
import CreateStep1 from "./CreateStep1";

const EditStaffForm = ({ staffId }) => {
  const router = useRouter();

  let token;
  const [data, setData] = useState({
    id: "",
    companyId: "",
    employeeId: 0,
    fullName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    socialSecurityNumber: "",
    homeAddress: "",
    homePhone: "",
    mobilePhone: "",
    email: "",
    jobTitle: "",
    department: "",
    manager: "",
    employmentType: "",
    employmentStatus: "",
    startDate: "",
    endDate: "",
    workLocation: "",
    employeePhoto: "",
    ethnicity: "",
    veteranStatus: "",
    disabilityStatus: "",
    notes: "",
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    token = localStorage.getItem("token");
    const loadStaffData = async () => {
      const staffData = await fetchStaffData(staffId, token);
      setData(staffData);
    };
    loadStaffData();
  }, [staffId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    token = localStorage.getItem("token");
    e.preventDefault();
    try {
      console.log("Data", data);
      console.log("token", token);
      const response = await axios.put(
        "https://hrportalmiddleware.onrender.com/api/company/staff/info/update",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Staff info updated successfully:", response.data.result);
      router.push("/dashboard");
    } catch (error) {
      alert("Error updating staff info:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CreateStep1 data={data} handleChange={handleChange} />

      <div className="flex justify-between">
        <button
          type="submit"
          className="py-2 px-4 bg-green-500 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditStaffForm;
