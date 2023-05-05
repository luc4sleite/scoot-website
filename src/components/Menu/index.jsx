import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import MenuItem from "../MenuItem";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="w-screen flex items-center justify-center p-4 gap-4 relative">
      <button onClick={() => {}} className="absolute left-6">
        <img src={hamburger} alt="Menu hamburger" />
      </button>
      <a href="/">
        <img src={logo} alt="Scoot Logo" />
      </a>
      <aside className="hidden flex-col justify-between absolute left-0 top-16 bg-secondary w-2/3 h-screen py-8">
        <ul>
          <MenuItem title="About" />
          <MenuItem title="Location" />
          <MenuItem title="Careers" />
        </ul>
        <Button name="Get Scootin" />
      </aside>
    </nav>
  );
}
