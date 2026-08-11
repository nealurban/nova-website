import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://novarecoveryapp.com/#organization",
  name: "Nova",
  url: "https://novarecoveryapp.com",
  logo: {
    "@type": "ImageObject",
    url: "https://novarecoveryapp.com/logos/nova-logo-dark.svg",
  },
  description:
    "Nova creates calm, supportive tools to help people quit drinking or cut back and move forward in recovery.",
  sameAs: ["https://www.instagram.com/nova.recovery"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://novarecoveryapp.com/#website",
  url: "https://novarecoveryapp.com",
  name: "Nova: Sobriety Companion",
  description:
    "A sobriety companion designed to help people quit drinking or cut back, understand their patterns, track progress, and find support.",
  publisher: {
    "@id": "https://novarecoveryapp.com/#organization",
  },
  inLanguage: "en-US",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://novarecoveryapp.com"),

  title: {
    default: "Nova: Sobriety Companion",
    template: "%s | Nova",
  },

  description:
    "Nova is a sobriety companion designed to help you quit drinking or cut back, understand your patterns, track your progress, and find support whenever you need it.",

  applicationName: "Nova",

  keywords: [
    "sobriety",
    "sobriety app",
    "quit drinking",
    "quit alcohol",
    "stop drinking",
    "cut back alcohol",
    "drink less",
    "alcohol recovery",
    "sobriety tracker",
    "sobriety journal",
    "sober community",
    "recovery support",
    "sobriety coach",
    "quit drinking app",
    "sober companion",
    "alcohol habit tracker",
    "recovery app",
    "Nova sobriety app",
  ],

  authors: [
    {
      name: "Nova",
      url: "https://novarecoveryapp.com",
    },
  ],

  creator: "Nova",
  publisher: "Nova",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novarecoveryapp.com",
    siteName: "Nova",
    title: "Nova: Sobriety Companion",
    description:
      "A calm, supportive companion to help you quit drinking or cut back, understand your patterns, and move forward one day at a time.",
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
    title: "Nova: Sobriety Companion",
    description:
      "A calm, supportive companion to help you quit drinking or cut back, understand your patterns, and move forward one day at a time.",
    images: ["/images/seo/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}