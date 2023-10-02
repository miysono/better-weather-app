export default function PricingCard({
  children,
  price,
  title,
  description,
  montly = false,
  active = false,
}) {
  return (
    <div
      className={`flex lg:w-1/4 flex-col p-10 m-5 space-y-5 rounded-2xl shadow lg:space-y-10 lg:m-0 ${
        active ? "bg-gray-800 scale-110 text-blue-400" : "bg-blue-400"
      }`}
    >
      <div className="space-y-2">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className="text-4xl font-bold lg:text-6xl">
          {price}
          {montly && <span className="text-sm">/month</span>}
        </span>
      </div>
      <p className="mt-3 ">{description}</p>
      {children}
      <button
        type="button"
        className={`inline-block px-5 py-3 duration-500 font-semibold text-center rounded-2xl border-2 text-xl ${
          active
            ? "border-blue-400 hover:bg-blue-400 hover:text-gray-800"
            : "border-gray-800 hover:bg-gray-800 hover:text-blue-400"
        } `}
      >
        Get Started
      </button>
    </div>
  );
}
