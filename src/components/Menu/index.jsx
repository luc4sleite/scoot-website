import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import close from "../../assets/icons/close.svg";
import MenuItem from "../MenuItem";
import Button from "../Button";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-screen flex items-center justify-center p-4 gap-4 relative">
      <button onClick={toggleMenu} className="absolute left-8">
        {toggleMenu ? (
          <img src={hamburger} alt="Menu hamburger" />
        ) : (
          <img src={close} alt="close icon" />
        )}
      </button>
      <a href="/">
        <img 
          className="w-16"
          src={logo} 
          alt="Scoot Logo" 
        />
      </a>
      {isOpen && (
        <aside className="flex flex-col h-screen justify-between absolute left-0 top-[61px] bg-secondary w-2/3 py-8 z-10">
          <ul>
            <MenuItem title="About" />
            <MenuItem title="Location" />
            <MenuItem title="Careers" />
          </ul>
          <Button name="Get Scootin" />
        </aside>
      )}
    </nav>
  );
}
