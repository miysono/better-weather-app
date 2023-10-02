import Footer from "/src/layouts/Footer";
import Navbar from "/src/layouts/Navbar";
import PageHeader from "/src/components/PageHeader";
import PageBody from "/src/components/PageBody";

import PricingCard from "./components/PricingCard";
import PricingFeatureList from "./components/PricingFeatureList";

export default function Pricing() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <PageBody>
        {/* Header */}
        <PageHeader title="Choose your best plan" subtitle="Pricing" />
        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center px-5 w-full gap-10">
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
        </div>
      </PageBody>
      {/* Footer */}
      <Footer />
    </>
  );
}
