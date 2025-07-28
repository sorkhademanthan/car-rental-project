export default function DatePicker({ label, name, value, onChange, required }) {
  return (
    <label className="font-medium block mb-2">
      {label}
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="block w-full mt-1 border rounded px-3 py-2"
      />
    </label>
  );
}
