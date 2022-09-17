function InputWL({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  ...rest
}) {
  return (
    <div id="input" className="flex flex-col w-full my-2 text-sm">
      <label htmlFor={label} className="text-gray-500 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
      />
    </div>
  );
}

export default InputWL;
