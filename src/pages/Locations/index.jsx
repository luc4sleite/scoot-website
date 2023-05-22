import worldMapDesktop from "../../assets/images/world-map-desktop.png";
import worldMapMobile from "../../assets/images/world-map-mobile.png";
import worldMapTablet from "../../assets/images/world-map-tablet.png";

import Banner from "../../components/Banner";
import Local from "../../components/Local";
import Button from "../../components/Button";

export default function Locations() {
  return (
    <div>
      <Banner background="bg-careers-location-hero-mobile md:bg-careers-location-hero-tablet lg:bg-careers-location-hero-desktop">
        Locations
      </Banner>
      <section className="my-[72px]">
        <div className="mx-[32px] mb-10">
          <img className="md:hidden" src={worldMapMobile} alt="world map" />
          <img
            className="hidden md:block lg:hidden"
            src={worldMapTablet}
            alt="world map"
          />
          <img
            className="hidden lg:block"
            src={worldMapDesktop}
            alt="world map"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[16px] md:hidden">
          <Local text="New York" />
          <Local text="London" />
          <Local text="Jakarta" />
          <Local text="Yokohama" />
        </div>
      </section>
      <section className="w-[311px] md:w-[573px] m-auto flex flex-col items-center justify-center gap-y-[32px] mb-[72px]">
        <h2 className="md:w-[457px] font-mono font-bold text-[#495567] text-[32px]/[32px] md:text-[48px]/[48px] text-center tracking-[-1.42857px]">
          Your City Not Listed?
        </h2>
        <p className="font-lexend text-[#939CAA] text-[15px]/[25px] text-center">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <Button name="Message Us" />
      </section>
    </div>
  );
}
