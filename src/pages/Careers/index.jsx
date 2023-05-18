import joinUs from "../../assets/images/join-us.jpg";
import Banner from "../../components/Banner";

import Benefit from "../../components/Benefit";
import JobCard from "../../components/JobCard";
import Values from "../../components/Values";

export default function Careers() {
  return (
    <div>
      <Banner background="bg-careers-location-hero-mobile md:bg-careers-location-hero-tablet lg:bg-careers-location-hero-desktop">Careers</Banner>
      <section className="flex flex-col items-center">
        <Benefit
          image={joinUs}
          title="Care to join our mission?"
          description="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          buttonText="Say Hello"
          layout="layout-one"
        />
      </section>
      <section className="flex flex-col items-center mt-[120px]">
        <Values title="Why join us?" />
      </section>
      <section className="flex flex-col items-center mt-[113px] mb-[120px] gap-y-4">
        <JobCard title="General Manager" location="Jakarta, Indonesia"/>
        <JobCard title="UI/UX Designer" location="Yokohama, Japan"/>
        <JobCard title="Blog Content Copywriter" location="New York, USA"/>
        <JobCard title="Graphic Designer" location="New York, USA"/>
        <JobCard title="Fleet Supervisor" location="Jakarta, Indonesia"/>
        <JobCard title="UX Analyst" location="London, UK"/>
      </section>
      
    </div>
  );
}
