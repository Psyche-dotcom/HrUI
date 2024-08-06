import TextInput from "./TextInput";

const CreateStep1 = ({ data, handleChange }) => (
  <div className="w-full">
    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
    <TextInput
      label="Full Name"
      name="fullName"
      value={data.fullName}
      onChange={handleChange}
    />
    <div className="flex gap-4">
      <TextInput
        label="Employee Id"
        name="employeeId"
        value={data.employeeId}
        onChange={handleChange}
      />
    </div>
    <div className="flex gap-4 w-full">
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
    <div className="flex gap-4 w-full">
      <TextInput
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextInput
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        value={data.dateOfBirth}
        onChange={handleChange}
      />
    </div>
    <div className="flex gap-4 w-full">
      <TextInput
        label="Home Address"
        name="homeAddress"
        value={data.homeAddress}
        onChange={handleChange}
      />
      <TextInput
        label="Home Phone"
        name="homePhone"
        value={data.homePhone}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default CreateStep1;
