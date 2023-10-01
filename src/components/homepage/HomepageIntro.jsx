import { TypeAnimation } from "react-type-animation";

export default function HomepageIntro() {
  return (
    <section className="relative h-screen text-gray-800">
      <div className="flex items-center justify-center flex-col relative z-10 top-1/2 -translate-y-1/2">
        <h1 className="text-2xl text-center lg:text-5xl -mt-24">
          <strong>
            Welcome to{" "}
            <span className="text-blue-500 tracking-wider">
              <TypeAnimation
                sequence={["", 500, "Cloudtinum", 10000]}
                speed={10}
                style={{ color: "rgb(59 130 246)" }}
                cursor={false}
              />
            </span>
          </strong>
        </h1>
        <p className="text-md text-center p-2 tracking-widest lg:text-2xl">
          <TypeAnimation
            sequence={["", 1500, "The most complete weather aplication", 10000]}
            speed={50}
            style={{ color: "rgb(31 41 55)" }}
            cursor={false}
          />
        </p>
      </div>
    </section>
  );
}
