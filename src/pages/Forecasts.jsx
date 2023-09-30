import Navbar from "../components/Navbar";

export default function Forecasts() {
  return (
    <div>
      <div className="min-h-screen bg-blue-300">
        <Navbar />
        <main className="bg-blue-300">
          <section className="py-10 bg-blue-300 text-gray-800">
            <div className="px-4 mx-auto">
              <div className="mx-auto mb-16 text-center">
                <span className="font-bold uppercase text-blue-400">
                  Forecasts
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
