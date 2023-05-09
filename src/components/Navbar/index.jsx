import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import close from "../../assets/icons/close.svg";
import MenuItem from "../MenuItem";
import Button from "../Button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-screen h-[64px] md:h-[96px] flex items-center justify-center p-4 gap-4 relative">
      <div className="md:hidden fixed flex h-[64px] items-center justify-center bg-white w-screen">
        <button onClick={toggleMenu} className="absolute left-8 top-6 block md:hidden">
          {!isOpen ? (
            <img src={hamburger} alt="Menu hamburger" />
          ) : (
            <img src={close} alt="close icon" />
          )}
        </button>
        <a href="/">
          <img className="w-[75.5px]" src={logo} alt="Scoot Logo" />
        </a>
      </div>
      <aside
          className={
            isOpen
              ? "fixed left-0 top-16 max-h-[90vh] h-full w-2/3 py-8 z-10 flex flex-col justify-between bg-secondary ease-in-out duration-300"
              : "fixed left-[-100%] top-16 max-h-[90vh] h-full w-2/3 py-8 z-10 flex flex-col justify-between bg-secondary ease-in-out duration-300"
          }
      >
          <ul className="text-primary">
            <MenuItem title="About" />
            <MenuItem title="Location" />
            <MenuItem title="Careers" />
          </ul>
          <Button name="Get Scootin" />
      </aside>
      <div className="hidden md:flex md:fixed w-screen h-[92px] justify-between items-center md:px-8 lg:px-48 m-auto bg-white">
        <a href="/">
          <img className="w-[107.82px]" src={logo} alt="Scoot Logo" />
        </a>
        <ul className="flex text-[#939CAA]">
          <MenuItem title="About" />
          <MenuItem title="Location" />
          <MenuItem title="Careers" />
        </ul>
        <Button name="Get Scootin" />
      </div>
    </nav>
  );
}
