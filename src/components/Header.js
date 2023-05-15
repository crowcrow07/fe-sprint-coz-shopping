import BasicMenu from "./Hamburger";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const openMain = () => {
    navigate("/");
  };

  return (
    <div className="flex sticky justify-between border border-black h-80 items-center">
      <div>
        <img
          className="cursor-pointer"
          src="/logo.png"
          alt="logo"
          onClick={openMain}
        />
      </div>
      <BasicMenu />
    </div>
  );
}
