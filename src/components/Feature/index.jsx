export default function Feature({ icon, title, description }) {
  return (
    <div className='flex flex-col items-center w-[311px] m-auto mt-[48px] gap-6'>
      <img 
        className='w-[56px]'
        src={icon}
      />
      <h2 className='font-mono font-bold text-xl text-[#495567]'>{title}</h2>
      <p className='text-center font-lexend text-[#939CAA] text-[15px]/[25px]'>{description}</p>
    </div>
  )
}
