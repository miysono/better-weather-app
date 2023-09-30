import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CardsContainer from "../components/pricing/CardsContainer";
import PricingBody from "../components/pricing/PricingBody";
import PricingTitle from "../components/pricing/PricingTItle";
import PricingCard from "../components/pricing/PricingCard";
import PricingFeatureList from "../components/pricing/PricingFeatureList";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <PricingBody>
        <PricingTitle />
        {/* Cards */}
        <CardsContainer>
          {/* Card 1 */}
          <PricingCard
            title="Basic"
            price="Free"
            description="Enjoy essential weather updates, daily forecasts, and basic features."
          >
            <PricingFeatureList
              features={[
                "Basic weather updates",
                "Limited Forecast Range",
                "Ad-supported",
              ]}
            />
          </PricingCard>

          {/* Card 2 */}
          <PricingCard
            title="Pro"
            price="$9.99"
            montly={true}
            active={true}
            description="Enhanced weather experience."
          >
            <PricingFeatureList
              features={[
                "Everything in free",
                "Exclusive Weather Insights",
                "Extended Forecasts",
                "Advanced Features",
              ]}
            />
          </PricingCard>

          {/* Card 3 */}
          <PricingCard
            price="$49.99"
            title="Lifetime"
            description="Say goodbye to a monthly or annual subscription fees."
          >
            <PricingFeatureList
              features={[
                "Everything in Pro",
                "Priority Support",
                "No recurring Charges",
              ]}
            />
          </PricingCard>
        </CardsContainer>
      </PricingBody>
      <Footer />
    </>
  );
}
