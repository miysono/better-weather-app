export default function PageContentCard({
  textContent,
  imgSrc,
  imgLeft = false,
}) {
  return (
    <div className="flex items-center justify-center lg:w-2/3 lg:gap-10">
      {imgLeft && <img src={imgSrc} className="w-24 lg:w-64" />}
      <p className="lg:w-1/2 lg:text-xl">{textContent}</p>
      {!imgLeft && <img src={imgSrc} className="w-24 lg:w-64" />}
    </div>
  );
}
