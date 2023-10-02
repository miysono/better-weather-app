import Clouds from "../components/homepage/Clouds";
import HomepageBody from "../components/homepage/HomepageBody";
import HomepageIntro from "../components/homepage/HomepageIntro";
import HomepageDescription from "../components/homepage/HomepageDescriptions";
import HomepageFeatures from "../components/homepage/HomepageFeatures";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sun from "../components/homepage/Sun";

function Homepage() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      <HomepageBody>
        {/* SUN */}
        <Sun />

        {/*SECTION  1 */}
        <HomepageIntro />

        {/* CLOUDS */}
        <Clouds className={"-mt-40"} />
        <Clouds inverted={true} />

        {/* SECTION 2 */}
        <HomepageDescription />

        {/* CLOUDS */}
        <Clouds />

        {/* SECTION 3 */}
        <HomepageFeatures />
        <Clouds inverted={true} />
        {/* FOOTER */}
      </HomepageBody>
      <Footer />
    </>
  );
}

export default Homepage;
