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

        <div className="mt-10 flex items-center align-center flex-col justify-center z-50">
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
          <div className="mt-20 lg:mt-16 lg:w-2/3">
            <div className="p-5 gap-5 flex justify-center lg:gap-10">
              <p className=" lg:text-2xl lg:w-96">
                Imagine a weather app that&apos;s not just about forecasts, but
                a portal to the atmospheric wonders of the world.
              </p>
              <img src="weather-img-1.svg" className="w-32 lg:w-96" />
            </div>
          </div>
          <div className="p-5 flex justify-center mt-5 flex-col items-center relative">
            <h1 className="font-semibold lg:text-2xl lg:w-2/3 lg:text-center ">
              Step into a digital meteorological masterpiece that paints the sky
              on your screen. With a single tap, it conjures up the very essence
              of weather, transforming your device into a window to the cosmos.
            </h1>
            <div className="mt-20 relative lg:mt-5">
              <NavLink to="/login">
                <div className=" hover:bg-blue-500 border-blue-500 border-2 rounded-xl relative">
                  <Button>
                    <p className="p-5 font-semibold lg:text-2xl">
                      Register now!
                    </p>
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
