import { Link, NavLink } from "react-router-dom";

import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";
import Button from "/src/components/Button";
import PageBody from "/src/components/PageBody";
import PageHeader from "/src/components/PageHeader";
import PageContentCard from "/src/components/PageContentCard";

import AboutUsSubtitle from "./components/AboutUsSubtitle";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <PageBody>
        {/* Title */}
        <PageHeader title="Who are we?" subtitle="About us" />

        {/* Body */}
        <div className="relative px-5 flex justify-center items-center flex-col">
          {/* Content Card 1 */}
          <PageContentCard
            imgSrc="/about-us-1.svg"
            textContent="Cloudtinum was born from a
        shared passion for weather and a vision to create an exceptional weather
        app that goes beyond the ordinary. Our dedicated team of meteorologists,
        designers, and developers came together with one goal in mind: to
        provide users with a weather experience that is both informative and
        captivating."
          />

          {/* Subtitle */}
          <AboutUsSubtitle subtitle="Our mission" />

          {/* Content Card 2*/}
          <PageContentCard
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

          {/* Content Card 3*/}
          <PageContentCard
            imgSrc="/about-us-3.svg"
            textContent="We invite you to join us on this weather journey. Cloudtinum is
              more than just an app. It's a community of weather
              enthusiasts, explorers, and nature lovers. Together, we'll
              continue to explore, learn, and appreciate the remarkable world of
              weather."
          />

          {/* CTA */}
          <div className="mt-10">
            <NavLink to="/login">
              <Button>Get Started!</Button>
            </NavLink>
          </div>
        </div>
      </PageBody>
      {/* Footer */}
      <Footer />
    </>
  );
}
