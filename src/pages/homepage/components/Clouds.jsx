import { Parallax } from "react-scroll-parallax";

import cloudSVG from "/clouds.svg";
import invertedCloudSVG from "/cloud-inverted.svg";

export default function Clouds({ inverted, className }) {
  const cloudImage = inverted ? invertedCloudSVG : cloudSVG;

  return (
    <Parallax translateX={[10, 0]}>
      <div className={className}>
        <img
          src={cloudImage}
          alt=""
          className={`relative h-52 w-full scale-x-150 lg:scale-x-125 lg:h-auto ${
            inverted && "rotate-180"
          }`}
        />
      </div>
    </Parallax>
  );
}
