import appStore from "../../assets/icons/app-store.svg";
import playStore from "../../assets/icons/google-play.svg";

export default function Download() {
  return (
    <section className="bg-[#495567] flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:px-[165px] h-[320px] w-full">
        <h2 className="font-mono font-bold text-[32px]/[32px] md:text-[48px]/[48px] tracking-[-1.43px] md:tracking-[-2.14286px] text-white text-center lg:text-left mb-10 md:w-[457px]">Sign up and Scoot off today</h2>
        <div className="flex items-center justify-center gap-5">
            <a href="/" className="cursor-pointer">
                <img 
                    className="w-[113.57px]"
                    src={appStore} 
                    alt="" 
                />
            </a>
            <a href="/" className="cursor-pointer">
                <img 
                    className="w-[130px]"
                    src={playStore} 
                    alt="" 
                />
            </a>
        </div>
        
    </section>
  )
}
