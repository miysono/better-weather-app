export default function ApplicationOverlay() {
  return (
    <>
      <div className="w-72 absolute font-semibold text-blue-400 flex justify-between top-5 right-1/2 translate-x-1/2 bg-gray-800 rounded-xl">
        <p className="p-3 text-center">Welcome back, user!</p>
        <button className="rounded-xl px-2 border-2 duration-300 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-800">
          Log out
        </button>
      </div>

      {/* Use location overlay */}
      <div className="w-64 absolute bottom-5 right-1/2 translate-x-1/2 bg-gray-800 rounded-xl">
        <button className="text-blue-400 font-semibold text-center rounded-xl w-full h-full p-3 duration-500 hover:bg-blue-400 hover:text-gray-800">
          Use your own location!
        </button>
      </div>
    </>
  );
}
