"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ToastLayout from "../components/ToastLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      "https://hrportalmiddleware.onrender.com/api/company/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    setLoading(false);
    console.log(data);
    if (data.statusCode === 200) {
      localStorage.setItem("token", data.result.jwt);
      toast.success("Login successfully");
      router.push("/dashboard");
    } else {
      const errordata = data.errorMessages[0];
      toast.error(errordata);
    }
  };

  return (
    <ToastLayout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
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
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"></div>
                  <span className="ml-2">Loading...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="flex justify-between text-sm">
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
            <a
              href="/forget-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </ToastLayout>
  );
}
