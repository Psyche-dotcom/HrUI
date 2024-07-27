"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CreateStep1 from "./CreateStep1";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";

const CreateStaffForm = () => {
  const router = useRouter();

  const [data, setData] = useState({
    employeeId: 0,
    fullName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    socialSecurityNumber: "",
    jobTitle: "",
    department: "",
    manager: "",
    employmentType: "",
    employmentStatus: "",
    startDate: "",
    workLocation: "",
    ethnicity: "",
    veteranStatus: "",
    homeAddress: "",
    homePhone: "",
    mobilePhone: "",
    email: "",
    disabilityStatus: "",
    notes: "",
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    data.dateOfBirth = new Date(data.dateOfBirth).toISOString();
    data.startDate = new Date(data.startDate).toISOString();
    console.log("data submit", data);
    try {
      const response = await axios.post(
        "https://hrportalmiddleware.onrender.com/api/company/staff/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Staff successfully added");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating staff:", error);
      alert("Error creating staff");
    }
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {step === 1 && <CreateStep1 data={data} handleChange={handleChange} />}
      {step === 2 && <CreateStep2 data={data} handleChange={handleChange} />}
      {step === 3 && <CreateStep3 data={data} handleChange={handleChange} />}
      {step === 4 && <CreateStep4 data={data} handleChange={handleChange} />}
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

export default CreateStaffForm;
