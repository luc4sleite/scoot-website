import Dropdown from "../Dropdown";

export default function index() {
  return (
    <section className="flex flex-col items-center justify-center m-auto mb-[120px]">
      <h2 className="font-mono font-bold text-[#495567] text-[32px] md:text-[48px] tracking-[-1.43px] text-center mb-[48px]">
        FAQs
      </h2>
      <div className="lg:grid grid-cols-home-features gap-x-[30px] lg:w-[1110px]">
        <h3 className="font-mono font-bold text-[#495567] text-[24px]/[28px] md:text-[40px]/[48px] tracking-[-1.07px] text-center lg:text-left mb-[32px]">
          How it works
        </h3>
        <div className="flex flex-col items-center justify-center gap-y-[16px]">
          <Dropdown
            title="How do I download the app?"
            text="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
          />
          <Dropdown
            title="Can I find a nearby Scoots?"
            text="Yes, you can find a nearby Scoot in your area. You can also search for the nearest Scoot by using the search bar at the top of the app"
          />
          <Dropdown
            title="Do I need a license to ride?"
            text="No, you do not need a license to ride. You can use the app without a license to ride."
          />
        </div>
      </div>
      <div className="lg:grid grid-cols-home-features gap-x-[30px] lg:w-[1110px] lg:mt-[64px]">
        <h3 className="font-mono font-bold text-[#495567] text-[24px]/[28px] md:text-[40px]/[48px] tracking-[-1.07px] text-center mb-[32px] mt-[48px] lg:m-0">
          Safe driving
        </h3>
        <div className="flex flex-col items-center justify-center gap-y-[16px]">
          <Dropdown
            title="Should I wear a helmet?"
            text="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
          />
          <Dropdown
            title="How about the rules & regulations?"
            text="We recommend that you read the rules and regulations before you ride."
          />
          <Dropdown
            title="What if I damage my Scoot?"
            text="You can report a Scoot to the Scoot team if you want to. We will try to contact you within 24 hours."
          />
        </div>
      </div>
    </section>
  );
}
