import { NavLink } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import Button from "../Button";

export default function HomepageDescription() {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <section
      className={`relative h-screen duration-500 ${
        inView ? "opacity-100" : "opacity-0  translate-y-20"
      }`}
      ref={ref}
    >
      <div className="-z-20">
        {/* {particles} */}
        <Parallax speed={30}>
          <img src="./public/particles.svg" className="absolute opacity-50" />
        </Parallax>

        <div className=" flex items-center align-center flex-col justify-center z-50">
          <h1
            className={`text-5xl text-gray-800 
                tracking-wider`}
          >
            <strong>
              Your Athmospheric{" "}
              <span
                className={` duration-700 ${
                  inView ? "text-blue-500" : "text-gray-800"
                }`}
              >
                Adventure
              </span>
            </strong>
          </h1>
          <div className="mt-16 w-2/3 h-full">
            <div className="p-5 flex justify-center gap-10">
              <p className=" text-2xl w-96 text-ellipsis">
                Imagine a weather app that&apos;s not just about forecasts, but
                a portal to the atmospheric wonders of the world.
              </p>
              <img src="weather-img-1.svg" className="w-96" />
            </div>
          </div>
          <div className="flex justify-center mt-5 flex-col items-center relative">
            <h1 className="text-2xl w-2/3 text-center ">
              <strong>
                Step into a digital meteorological masterpiece that paints the
                sky on your screen. With a single tap, it conjures up the very
                essence of weather, transforming your device into a window to
                the cosmos.
              </strong>
            </h1>
            <div className="mt-5 relative">
              <NavLink to="/login">
                <div className=" hover:bg-blue-500 border-blue-500 border-2 rounded-xl relative">
                  <Button>
                    <p className="text-2xl p-5">Register now!</p>
                  </Button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
