import ourTech from "../../assets/images/our-tech.jpg";
import ourIntegrity from "../../assets/images/our-integrity.jpg";
import ourCommunity from "../../assets/images/our-community.jpg";

import Card from "../Card";

export default function Values() {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <h2 className="font-mono font-bold text-[32px] text-[#495567] mb-[64px]">
        Our values
      </h2>
      <div className="flex flex-col items-center justify-center gap-y-[56px] mb-[145px]">
        <Card
          image={ourTech}
          number="01"
          title="Our tech"
          description="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
        />
        <Card
          image={ourIntegrity}
          number="02"
          title="Our integrity"
          description="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
        />
        <Card
          image={ourCommunity}
          number="03"
          title="Our community"
          description="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
        />
      </div>
    </div>
  );
}
