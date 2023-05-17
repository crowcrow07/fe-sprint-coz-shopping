import BasicMenu from "./Hamburger";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const openMain = () => {
    navigate("/");
  };

  return (
    <header className="flex w-full h-20 items-center justify-between px-16 shadow-md sticky top-0 bg-white z-50">
      <div>
        <img
          className="cursor-pointer"
          src="/logo.png"
          alt="logo"
          onClick={openMain}
        />
      </div>
      <BasicMenu />
    </header>
  );
}
