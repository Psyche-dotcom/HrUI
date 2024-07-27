"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "./Spinner";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [authData, setAuthData] = useState(null);

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
        } else {
          try {
            const response = await axios.get(
              "https://hrportalmiddleware.onrender.com/api/company/auth/info",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const { isSubscribed, subscrptionStart, subscrptionEnd, ...rest } =
              response.data.result;

            if (!isSubscribed) {
              router.push("/subscribe");
            } else {
              setAuthData({
                isSubscribed: isSubscribed,
                subscrptionEnd: subscrptionEnd,
                subscrptionStart: subscrptionStart,
              });
            }
          } catch (error) {
            console.error("Authentication check failed:", error);
            localStorage.removeItem("token");
            router.push("/login");
          }
        }
      };

      checkAuth();
    }, [router]);

    if (!authData) {
      return <Spinner />;
    }

    return <WrappedComponent {...props} authData={authData} />;
  };
};

export default withAuth;
