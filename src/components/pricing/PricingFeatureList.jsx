import PricingFeatue from "./PricingFeature";

export default function PricingFeatureList({ features }) {
  return (
    <ul className="flex-1 mb-6 ">
      {features.map((feature) => {
        return <PricingFeatue feature={feature} key={feature} />;
      })}
    </ul>
  );
}
