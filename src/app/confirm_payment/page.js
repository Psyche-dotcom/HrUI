"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Spinner from "../../components/Spinner";

const ConfirmPayment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const session_id = searchParams.get("session_id");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const confirmPayment = async () => {
      if (!session_id) return;

      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await axios.post(
          `https://hrportalmiddleware.onrender.com/api/payment/webhook/confirm-payment/stripe?session_id=${session_id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.statusCode === 200) {
          setStatus("success");
          setMessage("Payment Successfully completed");
        } else {
          setStatus("fail");
          setMessage("Transaction failed");
        }
      } catch (error) {
        setStatus("fail");
        setMessage("Transaction failed");
      }
    };

    confirmPayment();
  }, [session_id]);

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {status === null ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center bg-white p-6 rounded shadow-lg">
          {status === "success" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-16 h-16 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2l4-4m0 4l4-4m-4 4l-4-4"
                />
              </svg>
              <h2 className="mt-4 text-xl font-bold text-gray-800">
                {message}
              </h2>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-16 h-16 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 13v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6m4-4l4-4m0 4l-4-4m0 0a2 2 0 0 1 0-2h0a2 2 0 0 1 0 2m4-4a2 2 0 0 1 0-2h0a2 2 0 0 1 0 2"
                />
              </svg>
              <h2 className="mt-4 text-xl font-bold text-gray-800">
                {message}
              </h2>
            </>
          )}
          <button
            onClick={handleBackToDashboard}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

const ConfirmPaymentWrapper = () => (
  <Suspense fallback={<Spinner />}>
    <ConfirmPayment />
  </Suspense>
);

export default ConfirmPaymentWrapper;
