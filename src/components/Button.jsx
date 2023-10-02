function Button({ children, onClick, type }) {
  return (
    <button
      type={type}
      className="p-3 mb-20 font-semibold lg:text-2xl hover:bg-blue-400 border-blue-400 border-2 rounded-xl duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
