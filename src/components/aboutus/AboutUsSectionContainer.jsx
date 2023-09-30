export default function AboutUsSectionContainer({ imgSrc, textContent }) {
  return (
    <div className="flex items-center justify-center w-2/3 gap-10 mb-16">
      <p className="w-1/2 text-xl">{textContent}</p>
      <img src={imgSrc} className="w-64" />
    </div>
  );
}
