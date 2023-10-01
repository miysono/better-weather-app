export default function HomepageFeatures() {
  return (
    <section className=" relative bg-gray-300">
      <div className="flex items-center align-center justify-center flex-col">
        <h1 className="font-semibold text-3xl mt-20 tracking-wider lg:text-5xl">
          <span className="text-blue-400">Easy</span> to use!
        </h1>

        <div className="my-20 lg:w-2/3">
          <div className="p-5 flex items-center justify-center gap-5">
            <p className="lg:w-96 lg:text-xl">
              Cloudtinum is not only a weather app that takes you on captivating
              atmospheric adventures but also a breeze to navigate. We&apos;ve
              designed it with your convenience in mind, ensuring that every
              aspect of the app is incredibly user-friendly.
            </p>
            <img src="weather-img-2.svg" className="w-32 lg:w-72" />
          </div>
          <div className="p-5 mt-10 flex align-center items-center justify-center gap-5">
            <img src="weather-img-3.svg" className="w-32 lg:w-72" />
            <p className="lg:w-96 lg:text-xl">
              With a clean and intuitive interface, Cloudtinum lets you
              effortlessly explore weather information, forecasts, and immersive
              weather visuals with just a few taps. Whether you&apos;re a
              weather enthusiast or simply need a quick update before heading
              out, our app streamlines the experience for users of all
              backgrounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
