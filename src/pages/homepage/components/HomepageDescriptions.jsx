import { NavLink } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import Button from "/src/components/Button";
import PageContentCard from "/src/components/PageContentCard";

export default function HomepageDescription() {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <section
      className={`relative duration-500 ${
        inView ? "opacity-100" : "opacity-0  translate-y-20"
      }`}
      ref={ref}
    >
      <div className="-z-20">
        {/* {particles} */}
        <Parallax speed={30}>
          <img src="/particles.svg" className="absolute opacity-50" />
        </Parallax>

        <div className="mt-20 px-5 flex items-center align-center flex-col justify-center z-50">
          {/* Title */}
          <h1
            className={`font-semibold text-xl text-gray-800 
                tracking-wider lg:text-5xl`}
          >
            Your Athmospheric{" "}
            <span
              className={` duration-700 ${
                inView ? "text-blue-500" : "text-gray-800"
              }`}
            >
              Adventure
            </span>
          </h1>

          {/* Content */}
          <div className="mt-20 lg:mt-16 lg:w-2/3">
            <PageContentCard
              imgSrc="weather-img-1.svg"
              textContent="Imagine a weather app that's not just about forecasts, but
                a portal to the atmospheric wonders of the world."
            />
          </div>
          <div className="flex justify-center mt-10 flex-col items-center relative">
            <h1 className="font-semibold lg:text-2xl lg:w-2/3 lg:text-center ">
              Step into a digital meteorological masterpiece that paints the sky
              on your screen. With a single tap, it conjures up the very essence
              of weather, transforming your device into a window to the cosmos.
            </h1>
            <div className="mt-10 relative lg:mt-5">
              <NavLink to="/login">
                <Button>Register now!</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
