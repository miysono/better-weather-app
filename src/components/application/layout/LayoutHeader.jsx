import { Link } from "react-router-dom";

export default function LayoutHeader() {
  return (
    <Link to="/">
      <div className="py-5 text-blue-400 flex justify-center items-center">
        <img src="logo-icon-blue.png" className="w-20" />
        <p className="text-4xl tracking-tight font-semibold">Cloudtinum</p>
      </div>
    </Link>
  );
}
