import classNames from "classnames";

export default function Box({text, position}) {
    const boxClasses = classNames("box", position);
  return (
    <div className={`${position}`}>
      <div className="absolute bg-yellow overflow-hidden w-[120px] px-[30px] text-center z-10">
        <span className="font-mono font-bold text-[13px]/[28px] text-[#495567] text-center tracking-[-0.58 px]">
          {text}
        </span>
      </div>
      <div className="absolute bottom-0 top-[15px] left-[60px] transform -translate-x-1/2 w-4 h-4 bg-yellow rotate-45"></div>
    </div>
  );
}
