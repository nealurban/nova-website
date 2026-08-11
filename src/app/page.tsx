import PrimaryNavigation from "@/components/navigation/PrimaryNavigation";
import SiteFooter from "@/components/footer/SiteFooter";

import WelcomeHome from "@/sections/WelcomeHome/WelcomeHome";
import WhyNova from "@/sections/WhyNova/WhyNova";
import YouBelongHere from "@/sections/YouBelongHere/YouBelongHere";
import MeetNova from "@/sections/MeetNova/MeetNova";
import InsideNova from "@/sections/InsideNova/InsideNova";
import SupportInTheMoment from "@/sections/SupportInTheMoment/SupportInTheMoment";
import UnderstandYourJourney from "@/sections/UnderstandYourJourney/UnderstandYourJourney";
import SeeHowFarYouveCome from "@/sections/SeeHowFarYouveCome/SeeHowFarYouveCome";
import FinalCTA from "@/sections/FinalCTA/FinalCTA";

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nova: Sobriety Companion",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS",
  description:
    "Nova is a sobriety companion designed to help people quit drinking or cut back, understand their patterns, track their progress, journal, prepare for difficult situations, and find support.",
  url: "https://novarecoveryapp.com",
  image: "https://novarecoveryapp.com/images/seo/og-image.png",
  publisher: {
    "@type": "Organization",
    name: "Nova",
    url: "https://novarecoveryapp.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free to download with optional Nova Plus subscription features.",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <PrimaryNavigation />

      <main>
        <WelcomeHome />
        <WhyNova />
        <YouBelongHere />
        <MeetNova />
        <InsideNova />
        <SupportInTheMoment />
        <UnderstandYourJourney />
        <SeeHowFarYouveCome />
        <FinalCTA />
      </main>

      <SiteFooter />
    </>
  );
}