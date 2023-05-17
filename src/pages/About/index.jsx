import digitalEra from "../../assets/images/digital-era.jpg";
import betterLiving from "../../assets/images/better-living.jpg";


import Banner from "../../components/Banner";
import Benefit from "../../components/Benefit";
import Values from "../../components/Values";
import FAQ from "../../components/FAQ";

export default function About() {
  return (
    <div>
        <Banner background="bg-about-hero-mobile">
          About
        </Banner>
        <div className="flex flex-col items-center mb-[120px]">
          <Benefit 
            title="Mobility for the digital era"
            description="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
            image={digitalEra}
          />
          <Benefit
            title="Better urban living"
            description="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
            image={betterLiving}
          />
        </div>
        <Values />
        <FAQ />
        
    </div>
  )
}
