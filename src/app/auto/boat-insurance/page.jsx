import TrustBanner from "@/components/CommonComponents/Banner";
import ContactUs from "@/components/CommonComponents/ContactUs";
import FAQSection from "@/components/CommonComponents/FAQ";
import QuoteForm from "@/components/CommonComponents/GetQuote";
import Features from "@/components/Features";

const {
  default: InsuranceIntro,
} = require("@/components/CommonComponents/InsuranceIntro");

const BoatInsurance = () => {
  return (
    <>
      <InsuranceIntro
        title="Boat Insurance"
        description={<>One of the many joys of living in this beautiful country is the plenteousness of freshwater lakes, which are perfect for boating. There is nothing better than to be on your boat on a beautiful sunny day. We at Aaxel Insurance understand how important it is to help keep your boat protected on the road and on the water. <br/><br/>Before your next outing on the water, let us make sure you have the best coverage for your needs.</>}
        imageSrc="https://www.aaxel.ca/wp-content/uploads/2023/03/nikldn-t-6GW8T6Jsc-unsplash.jpg"
        buttonText="Get a Free Quote"
      />
      <TrustBanner />
      <QuoteForm/>
      <Features/>
      <ContactUs/>
      <FAQSection/>
    </>
  );
};

export default BoatInsurance;
