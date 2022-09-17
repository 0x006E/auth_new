function Button({ children, ...rest }) {
  return (
    <button
      className="px-6 py-2 mt-4 font-semibold text-gray-900 bg-white border-2 border-gray-500 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
