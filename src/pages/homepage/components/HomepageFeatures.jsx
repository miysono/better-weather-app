import { NavLink } from "react-router-dom";
import Button from "/src/components/Button";
import PageContentCard from "/src/components/PageContentCard";

export default function HomepageFeatures() {
  return (
    <section className="relative px-5 bg-gray-300">
      <div className="flex items-center align-center justify-center flex-col">
        {/* Title */}
        <h1 className="font-semibold text-3xl mt-20 tracking-wider lg:text-5xl">
          <span className="text-blue-400">Easy</span> to use!
        </h1>

        {/* Content */}
        <div className="mt-20 mb-10 flex flex-col gap-10 lg:w-2/3">
          <PageContentCard
            imgSrc="weather-img-2.svg"
            textContent="Cloudtinum is not only a weather app that takes you on captivating
              atmospheric adventures but also a breeze to navigate. We've
              designed it with your convenience in mind, ensuring that every
              aspect of the app is incredibly user-friendly."
          />

          <PageContentCard
            imgSrc="weather-img-3.svg"
            textContent="With a clean and intuitive interface, Cloudtinum lets you
              effortlessly explore weather information, forecasts, and immersive
              weather visuals with just a few taps. Whether you're a
              weather enthusiast or simply need a quick update before heading
              out, our app streamlines the experience for users of all
              backgrounds."
          />
        </div>
        <NavLink to="/login">
          <Button>Try now!</Button>
        </NavLink>
      </div>
    </section>
  );
}
