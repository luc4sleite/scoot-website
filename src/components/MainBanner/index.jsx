import Button from "../Button";
import rightArrow from "../../assets/patterns/right-arrow.svg";
import whiteCircles from "../../assets/patterns/white-circles.svg";
import line from "../../assets/patterns/line.svg";


export default function MainBanner() {
  return (
    <div className="w-screen h-[650px] flex flex-col justify-center items-center lg:items-start text-center gap-10 bg-home-hero-mobile md:bg-home-hero-tablet lg:bg-home-hero-desktop bg-no-repeat bg-cover pt-28 pb-40 mb-[120px]">
      <h1 className="text-[40px]/[40px] md:text-[56px]/[56px] lg:text-left lg:ml-36 text-white tracking-[-1.79px] font-mono font-bold w-[311px] md:w-[573px]">Scooter sharing made simple</h1>
      <p className="font-lexend text-[15px]/[25px] text-white w-[311px] md:w-[573px] lg:text-left lg:ml-64 lg:w-[405px]">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
      <div className="lg:ml-56">
        <Button name="Get Scootin" />
      </div>

      <img 
        className="hidden lg:block absolute left-0 top-[414px]"
        src={line}
        alt="line"
      />

      <img 
        className="absolute top-[500px] right-[235px] md:top-[550px] md:-left-28 lg:top-[414px] lg:left-[705px] z-0"
        src={rightArrow} 
        alt="right arrow"
      />
      <img
        className="hidden md:block absolute top-[625px] -right-8 lg:top-[475px] z-0" 
        src={whiteCircles}
        alt="circles"
      />
    </div>
  )
}
