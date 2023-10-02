export default function AboutUsSectionContainer({ imgSrc, textContent }) {
  return (
    <div className="flex items-center justify-center mb-20 lg:w-2/3 lg:gap-10">
      <p className="lg:w-1/2 lg:text-xl">{textContent}</p>
      <img src={imgSrc} className="w-24 lg:w-64" />
    </div>
  );
}
