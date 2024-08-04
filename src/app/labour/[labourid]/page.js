"use client";
import React from "react";
import MenuBar from "../../../components/menubar";
import SingleLabourView from "../../../components/SingleLabourView";
import withAuth from "../../../components/withAuth";
import ToastLayout from "../../../components/ToastLayout";

const LabourSinglePage = ({ params }) => {
  return (
    <ToastLayout>
      <section className="min-h-screen ">
        <div className="py-10">
          {" "}
          <MenuBar />
        </div>

        <div className="w-11/12 md:w-10/12 mx-auto ">
          <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Labour Information</h1>
            <SingleLabourView id={params.labourid} />
          </div>
        </div>
      </section>
    </ToastLayout>
  );
};

export default withAuth(LabourSinglePage);
