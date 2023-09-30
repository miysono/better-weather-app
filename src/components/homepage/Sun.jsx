import { Parallax } from "react-scroll-parallax";

import sunImage from "/sun.svg";

export default function Sun() {
  return (
    <Parallax speed={-200} rotate={[-180, 200]}>
      <img
        src={sunImage}
        alt=""
        className="absolute h-96 -top-80 right-40 animate-spin-slow -mt-40 -z-0 "
      />
    </Parallax>
  );
}
