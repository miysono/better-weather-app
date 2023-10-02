import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";

import Clouds from "./components/Clouds";
import HomepageIntro from "./components/HomepageIntro";
import HomepageDescription from "./components/HomepageDescriptions";
import HomepageFeatures from "./components/HomepageFeatures";
import Sun from "./components/Sun";

function Homepage() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      <main className="bg-blue-300 overflow-x-hidden duration-500">
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
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
