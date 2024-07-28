"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastLayout = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ToastLayout;
