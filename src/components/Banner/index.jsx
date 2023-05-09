import Button from "../Button";
import rightArrow from "../../assets/patterns/right-arrow.svg";


export default function Banner() {
  return (
    <div className="w-screen h-[650px] flex flex-col justify-center items-center text-center gap-10 bg-home-hero-mobile md:bg-home-hero-tablet lg:bg-home-hero-desktop bg-no-repeat bg-cover pt-28 pb-40 overflow-hidden">
      <h1 className="text-[40px]/[40px] text-white tracking-[-1.79px] font-mono font-bold w-[311px]">Scooter sharing made simple</h1>
      <p className="font-lexend text-[15px]/[25px] text-white w-[311px]">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
      <Button name="Get Scootin" />
      <img 
        className="absolute top-[500px] right-[235px] z-0"
        src={rightArrow} 
        alt="right arrow" 
      />
    </div>
  )
}
