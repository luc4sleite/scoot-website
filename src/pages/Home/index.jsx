import locate from '../../assets/icons/locate.svg';
import scooter from '../../assets/icons/scooter.svg';
import ride from '../../assets/icons/ride.svg';
import rectangle from '../../assets/patterns/rectangle.svg';
import rectangleHorizontal from '../../assets/patterns/rectangle-horizontal.svg';

import telemetry from '../../assets/images/telemetry.jpg';
import nearYou from '../../assets/images/near-you.jpg';
import payments from '../../assets/images/payments.jpg';

import Banner from "../../components/Banner";
import Feature from "../../components/Feature";
import Header from "../../components/Header";
import Benefit from '../../components/Benefit';
import Download from '../../components/Download/Index';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <img 
        className='hidden md:block lg:hidden absolute top-[746px] left-[140px] z-0'
        src={rectangle} 
        alt="" 
      />
      <img 
        className='hidden lg:block absolute top-[954px] left-0 z-0'
        src={rectangleHorizontal}
        alt=""
      />
      <div className='relative z-20 mb-[120px] lg:flex lg:flex-row lg:ml-[165px] lg:gap-x-[30px] lg:mt-[160px]'>
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
      </div>
      <div className='flex flex-col items-center gap-y-[120px] mb-[120px]'>
        <Benefit 
          image={telemetry} 
          title="Easy to use riding telemetry" 
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          buttonName="Learn More"
        />
        <Benefit
          image={nearYou}
          title="Coming to a city near you"
          description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
          buttonName="Learn More"
        />
        <Benefit
          image={payments}
          title="Zero hassle payments"
          description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          buttonName="Learn More"
        />
      </div>
      <footer>
        <Download />
      </footer>
      
    </>
  );
}
