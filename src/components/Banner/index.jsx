import classNames from "classnames";
import whiteCirlces from "../../assets/patterns/white-circles.svg";

export default function Banner({ background, children }) {
  const bannerClasses = classNames("banner", background);
  return (
    <div
      className={`flex md:relative items-center justify-center md:justify-start h-[160px] md:h-[200px] ${bannerClasses} bg-no-repeat bg-cover`}
    >
      <h1 className="text-white text-[40px] md:text-[56px] tracking-[-1.79px] font-bold md:ml-[97px] lg:ml-[165px]">
        {children}
      </h1>
      <img src={whiteCirlces} className="hidden md:block md:absolute right-[-31px] top-[69px]" alt="" />
    </div>
  );
}
