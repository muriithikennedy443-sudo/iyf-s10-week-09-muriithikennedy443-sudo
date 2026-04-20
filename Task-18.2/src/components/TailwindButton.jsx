function TailwindButton({ variant = 'primary', children, ...props }) {
  const baseClasses = "px-4 py-2 rounded font-medium cursor-pointer border-none";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default TailwindButton;