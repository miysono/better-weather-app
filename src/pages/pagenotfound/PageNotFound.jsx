import Navbar from "/src/layouts/Navbar";

export default function PageNotFound() {
  return (
    <div className="h-screen bg-blue-300">
      <Navbar />
      <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2">
        <h1 className="text-6xl font-semibold">Page not found!</h1>
      </div>
    </div>
  );
}
