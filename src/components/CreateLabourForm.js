"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CreateLStep1 from "./CreateLStep1";
import CreateLStep2 from "./CreateLStep2";
import ToastLayout from "./ToastLayout";
import { toast } from "react-toastify";

const CreateLabourForm = () => {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    customer: "",
    lcat: "",
    workSite: "",
    chargeCode: "",
    reminderDays: { start: "", end: "" },
    reminder: "",
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReminderDaysChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      reminderDays: { ...prevData.reminderDays, [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    data.reminderDays = `${data.reminderDays.start}-${data.reminderDays.end}`;
    console.log("data submit", data);
    try {
      const response = await axios.post(
        "https://hrportalmiddleware.onrender.com/api/labour/labour/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Labour successfully added");
      router.push("/labour");
    } catch (error) {
      console.error("Error creating labour:", error);
      toast.error("Error creating labour");
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
      {step === 1 && <CreateLStep1 data={data} handleChange={handleChange} />}
      {step === 2 && (
        <CreateLStep2
          data={data}
          handleChange={handleChange}
          handleReminderDaysChange={handleReminderDaysChange}
        />
      )}
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
        {step < 2 && (
          <button
            type="button"
            onClick={nextStep}
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        )}
        {step === 2 && (
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

export default CreateLabourForm;
