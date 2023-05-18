import { useState } from "react";
import chevron from "../../assets/icons/chevron.svg";

export default function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleMenu}
      className="grid grid-cols-dropdown bg-[#F2F5F9] justify-center items-center w-[311px] md:w-[689px] m-auto pl-[32px] pr-[28px] py-[32px] gap-y-[24px] hover:bg-[#FFF4DF] duration-300 cursor-pointer"
    >
      <span className="font-mono font-bold text-[#495567] text-[18px]/[24px] md:text-[24px]/[28px] tracking-[-0.803571px]">
        {title}
      </span>
      <button>
        {!isOpen ? (
          <img
            className="transition-all duration-300"
            src={chevron}
            alt="chevron"
          />
        ) : (
          <img
            className="rotate-180 transition-all duration-300"
            src={chevron}
            alt="chevron"
          />
        )}
      </button>
      <p
        className={
          !isOpen
            ? "hidden ease-in-out transition-all duration-300"
            : "block font-lexend text-[#495567] text-[15px]/[25px] col-span-3 ease-in-out transition-all duration-300"
        }
      >
        {text}
      </p>
    </div>
  );
}
