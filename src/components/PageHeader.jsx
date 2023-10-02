export default function PageHeader({ title, subtitle }) {
  return (
    <div className="my-20 mx-auto text-center lg:mb-16 lg:mt-0">
      <span className="font-bold uppercase text-blue-400">{subtitle}</span>
      <h2 className="font-bold text-3xl lg:text-5xl">{title}</h2>
    </div>
  );
}
