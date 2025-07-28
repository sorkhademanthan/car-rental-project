export default function Notification({ type = "info", message, onClose }) {
  const colors = {
    info: "bg-blue-100 text-blue-800 border-blue-300",
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
  };

  return (
    <div
      className={`border-l-4 p-4 mb-4 rounded ${colors[type]} flex items-center justify-between`}
      role="alert"
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-xl font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
}
