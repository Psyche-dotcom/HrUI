"use client";

import withAuth from "../../../components/withAuth";

import CreateStaffForm from "../../../components/CreateStaffForm";
import MenuBar from "../../../components/menubar";

const CreateStaffPage = () => {
  return (
    <section className="min-h-screen ">
      <div className="py-10">
        {" "}
        <MenuBar />
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto ">
        <div className=" flex items-center justify-center pb-10">
          <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md py-4">
            <h1 className="text-2xl font-bold mb-6">Create New Staff</h1>
            <CreateStaffForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withAuth(CreateStaffPage);
