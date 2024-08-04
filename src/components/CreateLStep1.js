import TextInput from "./TextInput";

const CreateLStep1 = ({ data, handleChange }) => (
  <div className="w-full">
    <h2 className="text-xl font-semibold mb-4">Labour Information</h2>
    <TextInput
      label="Name"
      name="name"
      value={data.name}
      onChange={handleChange}
    />
    <TextInput
      label="Customer"
      name="customer"
      value={data.customer}
      onChange={handleChange}
    />
    <TextInput
      label="LCAT"
      name="lcat"
      value={data.lcat}
      onChange={handleChange}
    />
    <TextInput
      label="Work Site"
      name="workSite"
      value={data.workSite}
      onChange={handleChange}
    />
    <TextInput
      label="Charge Code"
      name="chargeCode"
      value={data.chargeCode}
      onChange={handleChange}
    />
  </div>
);

export default CreateLStep1;
