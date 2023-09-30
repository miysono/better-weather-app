import { useLayoutContext } from "../../../hooks/useLayoutContext";

export default function LayoutBody({ children }) {
  const { isLayoutOpen, setIsLayoutOpen } = useLayoutContext();
  return (
    <>
      <div
        className="left-0 top-1/2 -translate-y-1/2 absolute z-50 text-gray-800"
        onClick={() => setIsLayoutOpen(true)}
      >
        <button className="text-6xl">&gt;</button>
      </div>
      <div
        className={`z-50 absolute w-1/3 max-h-full duration-500 h-screen text-blue-400 bg-gray-800 overflow-y-auto overflow-x-hidden ${
          isLayoutOpen ? "" : "-translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
}
