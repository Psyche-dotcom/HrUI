"use client";

import withAuth from "../../../components/withAuth";
import SingleStaffView from "../../../components/SingleStaffView";
import MenuBar from "../../../components/menubar";

const StaffsPage = ({ params }) => {
  return (
    <section className="min-h-screen ">
      <div className="py-10">
        {" "}
        <MenuBar />
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto ">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-bold mb-6">Staff Information</h1>
          <SingleStaffView id={params.id} />
        </div>
      </div>
    </section>
  );
};

export default withAuth(StaffsPage);
