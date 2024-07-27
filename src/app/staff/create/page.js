"use client";

import withAuth from "../../../components/withAuth";

import CreateStaffForm from "../../../components/CreateStaffForm";

const CreateStaffPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md py-4">
        <h1 className="text-2xl font-bold mb-6">Create New Staff</h1>
        <CreateStaffForm />
      </div>
    </div>
  );
};

export default withAuth(CreateStaffPage);
