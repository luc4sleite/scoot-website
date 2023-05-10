import locate from '../../assets/icons/locate.svg';
import scooter from '../../assets/icons/scooter.svg';
import ride from '../../assets/icons/ride.svg';

import Banner from "../../components/Banner";
import Feature from "../../components/Feature";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Feature 
        icon={locate} 
        title="Locate with app" 
        description="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away." 
      />
      <Feature
        icon={scooter}
        title="Pick your scooter"
        description="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
      />
      <Feature
        icon={ride}
        title="Enjoy the ride"
        description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
      />
      
    </>
  );
}
