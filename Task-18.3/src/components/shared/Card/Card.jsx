function Card({ title, children, footer }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      {title && (
        <div className="px-6 py-4 border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t bg-gray-50">{footer}</div>
      )}
    </div>
  );
}

export default Card;