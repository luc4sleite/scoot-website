import classNames from "classnames";
import Button from "../Button";

export default function Benefit({ image, title, description, buttonText, layout }) {

  const benefitClasses = classNames(
    "benefit", layout
  )

  return (
    <div className="flex flex-col items-center justify-center mt-[120px] lg:grid grid-cols-home-features lg:gap-x-[220px]">
      <img
        className={`w-[311px] md:w-[445px] rounded-full mb-[56px] ${benefitClasses}`}
        src={image}
        alt=""
      />
      <h1 className="font-mono font-bold text-[#495567] text-[32px] md:text-[48px]/[48px] tracking-[-1.43 px] text-center mb-[32px] w-[311px] md:w-[457px] lg:text-left lg:w-[445px] lg:mb-[24px] lg:self-end">
        {title}
      </h1>
      <p className="font-lexend text-[#939CAA] font-[15px]/[25px] text-center w-[311px] md:w-[573px] mb-[32px] lg:text-left lg:w-[445px] lg:m-0 lg:self-start">
        {description}
      </p>
      <div className="self-start">
        {buttonText && <Button name={buttonText} />}
      </div>
    </div>
  );
}
