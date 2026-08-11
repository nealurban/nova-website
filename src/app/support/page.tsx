import type { Metadata } from "next";

import PrimaryNavigation from "@/components/navigation/PrimaryNavigation";
import SiteFooter from "@/components/footer/SiteFooter";

import Hero from "@/sections/support/Hero/Hero";
import FAQ from "@/sections/support/FAQ/FAQ";
import Help from "@/sections/support/Help/Help";
import FinalCTA from "@/sections/support/FinalCTA/FinalCTA";

export const metadata: Metadata = {
  title: "Sobriety App Support & Help",

  description:
    "Get help with Nova, including account support, subscriptions, billing, technical issues, privacy questions, account deletion, and answers to common questions.",

  alternates: {
    canonical: "/support",
  },

  openGraph: {
    title: "Sobriety App Support & Help | Nova",
    description:
      "Get help with Nova, including account support, subscriptions, billing, technical issues, privacy questions, account deletion, and answers to common questions.",
    url: "/support",
    siteName: "Nova",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobriety App Support & Help | Nova",
    description:
      "Get help with Nova, including account support, subscriptions, billing, technical issues, privacy questions, account deletion, and answers to common questions.",
  },
};

export default function SupportPage() {
  return (
    <>
      <PrimaryNavigation />

      <main>
  <Hero />
  <FAQ />
  <Help />
  <FinalCTA />
</main>

      <SiteFooter />
    </>
  );
}