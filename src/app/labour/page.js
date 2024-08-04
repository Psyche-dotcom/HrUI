"use client";
import LabourCRUD from "../../components/LabourCRUD";
import withAuth from "../../components/withAuth";
import MenuBar from "../../components/menubar";

const LabourDashboard = ({ authData }) => {
  const dateObject = new Date(authData.subscrptionEnd);
  const formattedEndDate = dateObject.toLocaleString();
  const dateObject2 = new Date(authData.subscrptionStart);
  const formattedStartDate = dateObject2.toLocaleString();

  return (
    <div className="min-h-screen">
      <MenuBar />
      <div className="w-11/12 md:w-10/12 mx-auto">
        <LabourCRUD
          companyName={authData.companyName}
          start={formattedStartDate}
          end={formattedEndDate}
        />
      </div>
    </div>
  );
};

export default withAuth(LabourDashboard);
