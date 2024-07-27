import React from "react";
import TextInput from "./TextInput";

const Step3 = ({ data, handleChange }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
    <TextInput
      label="Ethnicity"
      name="ethnicity"
      value={data.ethnicity}
      onChange={handleChange}
    />
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
);

export default Step3;
