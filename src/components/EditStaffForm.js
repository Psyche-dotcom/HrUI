"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { fetchStaffData } from "./fetchStaffData";
import { useRouter } from "next/navigation";

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

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {step === 1 && <Step1 data={data} handleChange={handleChange} />}
      {step === 2 && <Step2 data={data} handleChange={handleChange} />}
      {step === 3 && <Step3 data={data} handleChange={handleChange} />}
      {step === 4 && <Step4 data={data} handleChange={handleChange} />}{" "}
      <div className="flex justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="py-2 px-4 bg-gray-500 text-white rounded-md"
          >
            Previous
          </button>
        )}
        {step < 4 && (
          <button
            type="button"
            onClick={nextStep}
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        )}
        {step === 4 && (
          <button
            type="submit"
            className="py-2 px-4 bg-green-500 text-white rounded-md"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default EditStaffForm;
