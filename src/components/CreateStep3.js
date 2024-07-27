import TextInput from "./TextInput";

const CreateStep3 = ({ data, handleChange }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
    <div className="flex gap-4">
      <TextInput
        label="Employee Id"
        name="employeeId"
        value={data.employeeId}
        onChange={handleChange}
      />
      <TextInput
        label="Ethnicity"
        name="ethnicity"
        value={data.ethnicity}
        onChange={handleChange}
      />
    </div>
    <div className="flex gap-4">
      <TextInput
        label="Veteran Status"
        name="veteranStatus"
        value={data.veteranStatus}
        onChange={handleChange}
      />
      <TextInput
        label="Disability Status"
        name="disabilityStatus"
        value={data.disabilityStatus}
        onChange={handleChange}
      />
    </div>
    <TextInput
      label="Notes"
      name="notes"
      value={data.notes}
      onChange={handleChange}
      multiline={true}
    />
  </div>
);

export default CreateStep3;
