"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const router = useRouter();
    const [authData, setAuthData] = useState(null);
    const pathname = usePathname();
    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/");
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
            const {
              isSubscribed,
              subscrptionStart,
              companyName,
              subscrptionEnd,
              ...rest
            } = response.data.result;

            if (!isSubscribed) {
              if (pathname === "/subscribe") {
                setAuthData({
                  companyName: companyName,
                  isSubscribed: isSubscribed,
                  subscrptionEnd: subscrptionEnd,
                  subscrptionStart: subscrptionStart,
                });
                toast.info("Please subscribe to use our service");
                return;
              }
              router.push("/subscribe");
            } else {
              setAuthData({
                companyName: companyName,
                isSubscribed: isSubscribed,
                subscrptionEnd: subscrptionEnd,
                subscrptionStart: subscrptionStart,
              });
            }
          } catch (error) {
            console.error("Authentication check failed:", error);
            localStorage.removeItem("token");
            router.push("/");
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

  ComponentWithAuth.displayName = `WithAuth(${getDisplayName(
    WrappedComponent
  )})`;

  return ComponentWithAuth;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withAuth;
