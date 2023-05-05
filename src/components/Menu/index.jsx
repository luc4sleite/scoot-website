import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icons/hamburger.svg";

export default function Menu() {
  return (
    <nav className="w-full flex items-center justify-center p-4 gap-4 relative">
      <button onClick={() => {}} className="absolute left-6">
        <img src={hamburger} alt="Menu hamburger" />
      </button>
      <a href="/">
        <img src={logo} alt="Scoot Logo" />
      </a>

    </nav>
  );
}
