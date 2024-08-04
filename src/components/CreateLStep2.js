import TextInput from "./TextInput";

const CreateLStep2 = ({ data, handleChange, handleReminderDaysChange }) => (
  <div className="w-full">
    <h2 className="text-xl font-semibold mb-4">Reminder Information</h2>
    <div className="flex gap-4 w-full">
      <TextInput
        label="Start Reminder Day"
        name="start"
        value={data.reminderDays.start}
        onChange={handleReminderDaysChange}
      />
      <TextInput
        label="End Reminder Day"
        name="end"
        value={data.reminderDays.end}
        onChange={handleReminderDaysChange}
      />
    </div>
    <TextInput
      label="Reminder Time"
      name="reminder"
      type="time"
      value={data.reminder}
      onChange={handleChange}
    />
  </div>
);

export default CreateLStep2;
