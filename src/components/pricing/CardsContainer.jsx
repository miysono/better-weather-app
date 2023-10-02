export default function CardsContainer({ children }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center w-full gap-10">
      {children}
    </div>
  );
}
