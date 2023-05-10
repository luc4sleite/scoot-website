export default function Feature({ icon, title, description }) {
  return (
    <div className='flex flex-col items-center w-[311px] m-auto mt-[48px] gap-6 md:grid md:grid-cols-home-features md:gap-x-[79px] md:gap-0 md:w-[573px] lg:w-[350px] lg:grid-cols-1 lg:m-0'>
      <img 
        className='w-[56px] md:w-[96px] md:row-span-2 lg:mb-[40px]'
        src={icon}
      />
      <h2 className='font-mono font-bold text-xl text-[#495567] md:text-left md:text-[24px] tracking-[-1.07px]'>{title}</h2>
      <p className='text-center font-lexend text-[#939CAA] text-[15px]/[25px] md:text-left md:mt-[27px]'>{description}</p>
    </div>
  )
}
