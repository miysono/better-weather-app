import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import AboutUsBody from "../components/aboutus/AboutUsBody";
import AboutUsContainer from "../components/aboutus/AboutUsContainer";
import AboutUsIntro from "../components/aboutus/AboutUsIntro";
import AboutUsTitle from "../components/aboutus/AboutUsTitle";
import AboutUsSubtitle from "../components/aboutus/AboutUsSubtitle";
import AboutUsSectionContainer from "../components/aboutus/AboutUsSectionContainer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsBody>
        {/* Title */}
        <AboutUsTitle />

        {/* Body */}
        <AboutUsContainer>
          {/* Paragraph 1 */}
          <AboutUsIntro />

          {/* Subtitle */}
          <AboutUsSubtitle subtitle="Our mission" />
          {/* Paragraph 2 */}
          <AboutUsSectionContainer
            imgSrc="/about-us-2.svg"
            textContent="At
              Cloudtinum, we see
              weather as more than just data. It's a canvas of
              nature's artistry. We've infused our app with the wonder
              and beauty of the atmosphere, transforming weather tracking into a
              captivating journey. Our goal is to connect you with the natural
              world and inspire a deeper appreciation for the ever-changing sky."
          />

          {/* Subtitle */}
          <AboutUsSubtitle subtitle="Join our weather journey!" />
          {/* Paragraph 3 */}
          <AboutUsSectionContainer
            textContent="We invite you to join us on this weather journey. Cloudtinum is
              more than just an app. It's a community of weather
              enthusiasts, explorers, and nature lovers. Together, we'll
              continue to explore, learn, and appreciate the remarkable world of
              weather."
            imgSrc="/about-us-3.svg"
          />

          {/* CTA */}
          <Link to="/login">
            <Button
              className={
                "inline-block px-5 py-3 duration-500 font-semibold text-center rounded-2xl hover:text-blue-400 border-gray-800 hover:bg-gray-800 border-2 lg:text-xl lg:w-96 "
              }
              type="button"
            >
              {" "}
              Get Started
            </Button>
          </Link>
        </AboutUsContainer>
      </AboutUsBody>
      {/* Footer */}
      <Footer />
    </>
  );
}
