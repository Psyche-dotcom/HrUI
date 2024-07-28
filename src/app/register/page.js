"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://hrportalmiddleware.onrender.com/api/company/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          location,
          email,
          phoneNumber,
          password,
        }),
      }
    );

    const data = await response.json();
    if (data.statusCode === 200) {
      alert("Registration successful. Please login.");
      router.push("/");
    } else {
      alert(data.displayMessage);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="companyName" className="block text-sm">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <div className="text-center text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}
