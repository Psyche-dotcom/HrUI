import TextInput from "./TextInput";

const CreateStep2 = ({ data, handleChange }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Job Information</h2>
    <TextInput
      label="Job Title"
      name="jobTitle"
      value={data.jobTitle}
      onChange={handleChange}
    />
    <div className="flex gap-4">
      <TextInput
        label="Department"
        name="department"
        value={data.department}
        onChange={handleChange}
      />
      <TextInput
        label="Manager"
        name="manager"
        value={data.manager}
        onChange={handleChange}
      />
    </div>
    <div className="flex gap-4">
      <TextInput
        label="Employment Type"
        name="employmentType"
        value={data.employmentType}
        onChange={handleChange}
      />
      <TextInput
        label="Employment Status"
        name="employmentStatus"
        value={data.employmentStatus}
        onChange={handleChange}
      />
    </div>
    <div className="flex gap-4">
      <TextInput
        label="Start Date"
        name="startDate"
        type="date"
        value={data.startDate}
        onChange={handleChange}
      />
      <TextInput
        label="Work Location"
        name="workLocation"
        value={data.workLocation}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default CreateStep2;
