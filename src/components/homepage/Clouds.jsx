import { Parallax } from "react-scroll-parallax";

import cloudSVG from "/clouds.svg";
import invertedCloudSVG from "/cloud-inverted.svg";

export default function Clouds({ inverted }) {
  const cloudImage = inverted ? invertedCloudSVG : cloudSVG;

  return (
    <Parallax translateX={[10, 0]}>
      <div className={`${!inverted && "-mt-60"}`}>
        <img
          src={cloudImage}
          alt=""
          className={`relative h-auto w-full scale-x-125 ${
            inverted && "rotate-180"
          }`}
        />
      </div>
    </Parallax>
  );
}
