"use client";
import StaffCRUD from "../../components/StaffCRUD";
import withAuth from "../../components/withAuth";
import MenuBar from "../../components/menubar";

const Dashboard = ({ authData }) => {
  const dateObject = new Date(authData.subscrptionEnd);
  const formattedEndDate = dateObject.toLocaleString();
  const dateObject2 = new Date(authData.subscrptionStart);
  const formattedStartDate = dateObject2.toLocaleString();

  return (
    <div className="min-h-screen ">
      <MenuBar />
      <div className="w-11/12 md:w-10/12 mx-auto">
        <StaffCRUD start={formattedStartDate} end={formattedEndDate} />
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
