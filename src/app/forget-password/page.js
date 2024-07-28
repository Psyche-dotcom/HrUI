"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ToastLayout from "../../components/ToastLayout";
import { toast } from "react-toastify";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

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
    setLoading(false);

    if (data.statusCode === 200) {
      toast.success("sent token to your email successfully");
      router.push("/reset-password");
    } else {
      const errordata = data.errorMessages[0];
      toast.error(errordata);
    }
  };

  return (
    <ToastLayout>
      <div className="flex justify-center items-center min-h-screen">
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
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"></div>
                  <span className="ml-2">Loading...</span>
                </div>
              ) : (
                "Send Reset Code"
              )}
            </button>
          </form>
          <div className="text-center text-sm">
            <a href="/" className="text-blue-600 hover:underline">
              Remembered your password? Login
            </a>
          </div>
        </div>
      </div>
    </ToastLayout>
  );
}
