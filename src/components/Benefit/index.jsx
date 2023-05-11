import Button from '../Button';

export default function Benefit({ image, title, description, buttonName }) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img 
            className='w-[311px] rounded-full mb-[56px]'
            src={image} 
            alt="" 
        />
        <h1 className='font-mono font-bold text-[#495567] text-[32px]/[32px] tracking-[-1.43 px] text-center mb-[32px] w-[311px]'>{title}</h1>
        <p className='font-lexend text-[#939CAA] font-[15px]/[25px] text-center w-[311px] mb-[32px]'>{description}</p>
        <Button name={buttonName}/>
    </div>
  )
}
