import React from "react";
import TextInput from "./TextInput";

const Step4 = ({ data, handleChange }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
    <TextInput
      label="Start Date"
      name="startDate"
      type="date"
      value={data.startDate.split("T")[0]}
      onChange={handleChange}
    />
    <TextInput
      label="End Date"
      name="endDate"
      type="date"
      value={data.endDate?.split("T")[0] ?? ""}
      onChange={handleChange}
    />

    <TextInput
      label="Work Location"
      name="workLocation"
      value={data.workLocation}
      onChange={handleChange}
    />
    <TextInput
      label="Notes"
      name="notes"
      multiline={true}
      value={data.notes}
      onChange={handleChange}
    />
  </div>
);

export default Step4;
