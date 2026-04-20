function TailwindCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
}

export default TailwindCard;