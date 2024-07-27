"use client";

import EditStaffForm from "../../../../components/EditStaffForm";
import withAuth from "../../../../components/withAuth";
import MenuBar from "../../../../components/menubar";

const EditStaffPage = ({ params }) => {
  return (
    <section className="min-h-screen ">
      <div className="py-10">
        {" "}
        <MenuBar />
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto ">
        <div className=" flex items-center justify-center  ">
          <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Edit Staff Information</h1>
            <EditStaffForm staffId={params.staffId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withAuth(EditStaffPage);
