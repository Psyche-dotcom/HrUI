const TextInput = ({
  label,
  name,
  value,
  onChange,
  min,
  type = "text",
  multiline = false,
}) => {
  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      ) : (
        <input
          type={type}
          name={name}
          min={min}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      )}
    </div>
  );
};

export default TextInput;
