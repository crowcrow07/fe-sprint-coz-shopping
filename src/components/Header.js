import BasicMenu from "./Hamburger";

export default function Header() {
  return (
    <div className="flex sticky justify-between border border-black h-80 items-center">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <BasicMenu />
    </div>
  );
}
