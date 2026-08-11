import type { Metadata } from "next";

import PrimaryNavigation from "@/components/navigation/PrimaryNavigation";
import SiteFooter from "@/components/footer/SiteFooter";

import Hero from "@/sections/experience/Hero/Hero";
import Coach from "@/sections/experience/Coach/Coach";
import Journal from "@/sections/experience/Journal/Journal";
import Patterns from "@/sections/experience/Patterns/Patterns";
import Situations from "@/sections/experience/Situations/Situations";
import Timeline from "@/sections/experience/Timeline/Timeline";
import MoneySaved from "@/sections/experience/MoneySaved/MoneySaved";
import Medals from "@/sections/experience/Medals/Medals";
import NovaClub from "@/sections/experience/NovaClub/NovaClub";
import FinalCTA from "@/sections/experience/FinalCTA/FinalCTA";

export const metadata: Metadata = {
  title: "Sobriety App Support & Help",

  description:
    "Get help with Nova, including account support, subscriptions, billing, technical issues, privacy questions, account deletion, and answers to common questions.",

  alternates: {
    canonical: "/support",
  },

  openGraph: {
    title: "Sobriety App Support & Help | Nova Sobriety Companion",
    description:
      "Get help with Nova, including account support, subscriptions, billing, technical issues, privacy questions, account deletion, and answers to common questions.",
    url: "/support",
    siteName: "Nova",
    type: "website",
    images: [
      {
        url: "/images/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nova – A peaceful life is still waiting for you.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobriety App Support & Help | Nova Sobriety Companion",
    description:
      "Get help with Nova, including account support, subscriptions, billing, technical issues, privacy questions, account deletion, and answers to common questions.",
    images: ["/images/seo/og-image.png"],
  },
};

export default function ExperiencePage() {
  return (
    <>
      <PrimaryNavigation />

      <main>
        <Hero />
        <Coach />
        <Journal />
        <Patterns />
        <Situations />
        <Timeline />
        <MoneySaved />
        <Medals />
        <NovaClub />
        <FinalCTA />
      </main>

      <SiteFooter />
    </>
  );
}