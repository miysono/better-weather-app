import { useLayoutContext } from "../../../hooks/useLayoutContext";

export default function LayoutBody({ children }) {
  const { isLayoutOpen } = useLayoutContext();
  return (
    <div
      className={`z-50 absolute w-1/3 max-h-full duration-500 h-screen text-blue-400 bg-gray-800 overflow-y-auto overflow-x-hidden ${
        isLayoutOpen ? "" : "-translate-x-full"
      }`}
    >
      {children}
    </div>
  );
}
