export default function Card({image, title, number, description}) {
  return (
    <div className="flex flex-col items-center justify-center m-auto relative w-[311px] md:w-[457px] lg:w-[350px] ">
        <img 
            className="rounded-full w-[240px] md:w-[240px]"
            src={image} 
            alt="" 
        />
        <span className="flex items-center justify-center rounded-full bg-yellow w-[96px] h-[96px] text-center font-mono font-bold text-[24px]/[28px] tracking-[-1.07px] text-[#495567] absolute top-[192px]">{number}</span>
        <h3 className="mt-[64px] font-mono font-bold text-[24px]/[28px] text-[#495567] tracking-[-1.07px]">{title}</h3>
        <p className="font-lexend text-[#939CAA] text-[15px]/[25px] text-center mt-[27px]">{description}</p>
    </div>
  )
}
