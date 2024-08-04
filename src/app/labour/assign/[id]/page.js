"use client";
import React from "react";
import MenuBar from "../../../../components/menubar";

import withAuth from "../../../../components/withAuth";
import AssignLabour from "../../../../components/AssignLabour";
import { useRouter } from "next/navigation";
import ToastLayout from "../../../../components/ToastLayout";

const LabourSinglePage = ({ params }) => {
  const router = useRouter();
  const handleCreateLabout = () => {
    router.push(`/labour/create`);
  };
  return (
    <ToastLayout>
      <section className="min-h-screen ">
        <div className="py-10">
          {" "}
          <MenuBar />
        </div>

        <div className="w-11/12 md:w-10/12 mx-auto ">
          <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold mb-6">Labour Information</h1>
              <button
                onClick={() => handleCreateLabout()}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Create Labour
              </button>
            </div>

            <AssignLabour id={params.id} />
          </div>
        </div>
      </section>
    </ToastLayout>
  );
};

export default withAuth(LabourSinglePage);
