"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://hrportalmiddleware.onrender.com/api/company/auth/forgot_password?email=${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (data.statusCode === 200) {
      alert("Password reset token sent to your email.");
      router.push("/reset-password");
    } else {
      alert(data.displayMessage);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Forget Password</h1>
        <form onSubmit={handleForgetPassword} className="space-y-6">
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
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Send Reset Code
          </button>
        </form>
        <div className="text-center text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Remembered your password? Login
          </a>
        </div>
      </div>
    </div>
  );
}
