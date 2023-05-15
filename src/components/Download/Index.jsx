import appStore from "../../assets/icons/app-store.svg";
import playStore from "../../assets/icons/google-play.svg";

export default function Download() {
  return (
    <section className="bg-[#495567] flex flex-col items-center justify-center h-[320px] w-full">
        <h2 className="font-mono text-bold text-[32px]/[32px] tracking-[-1.43px] text-white text-center mb-10">Sign up and Scoot off today</h2>
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
