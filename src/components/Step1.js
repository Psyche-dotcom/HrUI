import TextInput from "./TextInput";

const Step1 = ({ data, handleChange }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
    <TextInput
      label="Full Name"
      name="fullName"
      value={data.fullName}
      onChange={handleChange}
    />

    <div className="flex  gap-4">
      <TextInput
        label="Gender"
        name="gender"
        value={data.gender}
        onChange={handleChange}
      />

      <TextInput
        label="Mobile Phone"
        name="mobilePhone"
        value={data.mobilePhone}
        onChange={handleChange}
      />
    </div>
    <div className="flex  gap-4">
      <TextInput
        label="Staff Email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextInput
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        value={data.dateOfBirth.split("T")[0]}
        onChange={handleChange}
      />
    </div>

    <div className="flex  gap-4">
      <TextInput
        label="Social Security Number"
        name="socialSecurityNumber"
        value={data.socialSecurityNumber}
        onChange={handleChange}
      />
      <TextInput
        label="Marital Status"
        name="maritalStatus"
        value={data.maritalStatus}
        onChange={handleChange}
      />
    </div>
    <div className="flex  gap-4 w-full">
      <TextInput
        label="Home Address"
        name="homeAddress"
        value={data.homeAddress}
        onChange={handleChange}
      />
      <TextInput
        label="Home Phone"
        type="text"
        name="homePhone"
        value={data.homePhone}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Step1;
