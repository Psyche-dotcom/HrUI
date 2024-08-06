const CreateStep4 = ({ data }) => {
  const staffDetails = {
    fullName: data.fullName,
    gender: data.gender,
    mobilePhone: data.mobilePhone,
    email: data.email,
    homePhone: data.homePhone,
    homeAddress: data.homeAddress,
    dateOfBirth: data.dateOfBirth.split("T")[0],
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(staffDetails).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <span className="font-semibold text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, " $1")}:
            </span>
            <span className="text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateStep4;
