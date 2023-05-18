import Button from "../Button";

export default function JobCard( {title, location}) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-dropdown items-center w-[311px] md:w-[689px] lg:w-[1110px] bg-[#F2F5F9] p-[32px] md:px-[48px]">
      <h2 className="font-mono font-bold text-[18px]/[24px] md:text-[24px]/[28px] text-center md:text-left text-[#495567] tracking-[-0.803571px] mb-1 md:col-start-1 md:col-end-2">{title}</h2>
      <h3 className="font-lexend text-[15px]/[25px] text-center md:text-left text-[#495567] mb-4 md:col-start-1 md:col-end-2 md:self-end md:mb-0">{location}</h3>
      <Button name="Apply" width="w-full md:w-[180px] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3" />
    </div>
  );
}
