import worldMapDesktop from "../../assets/images/world-map-desktop.png";
import worldMapMobile from "../../assets/images/world-map-mobile.png";
import worldMapTablet from "../../assets/images/world-map-tablet.png";

import Banner from "../../components/Banner";
import Local from "../../components/Local";
import Button from "../../components/Button";
import Box from "../../components/Box";

export default function Locations() {
  return (
    <div>
      <Banner background="bg-careers-location-hero-mobile md:bg-careers-location-hero-tablet lg:bg-careers-location-hero-desktop">
        Locations
      </Banner>
      <section className="my-[72px]">
        <div className="h-[152px] md:h-[337px] lg:h-[543px] lg:flex lg:justify-center">
          <div className="mx-[32px] mb-10 absolute">
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
          <div className="hidden md:flex lg:hidden">
            <Box text="New York" position="relative top-[54px] left-[137px]" />
            <Box text="London" position="relative top-[26px] left-[282px]" />
            <Box text="Jakarta" position="relative top-[170px] left-[519px]" />
            <Box text="Yokohama" position="relative top-[65px] left-[569px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[16px] md:hidden lg:hidden">
          <Local text="New York" />
          <Local text="London" />
          <Local text="Jakarta" />
          <Local text="Yokohama" />
        </div>
      </section>
      <section className="w-[311px] md:w-[573px] lg:w-[1111px] m-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-y-[32px] mb-[72px]">
        <h2 className="md:w-[457px] lg:w-[351px] lg:text-left font-mono font-bold text-[#495567] text-[32px]/[32px] lg:text-[48px]/[48px] md:text-[48px]/[48px] text-center tracking-[-1.42857px] lg:tracking-[-2.14286px]">
          Your City Not Listed?
        </h2>
        <p className="font-lexend text-[#939CAA] text-[15px]/[25px] text-center lg:text-left lg:w-[445px]">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <Button name="Message Us" />
      </section>
    </div>
  );
}
