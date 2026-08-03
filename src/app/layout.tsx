import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProvider from "@/components/ScrollProvider";
import ThreeBackground from "@/components/ThreeBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import PhoneCallButton from "@/components/PhoneCallButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moderneducation.group'),
  title: {
    default: "Modern Education Group | Best School in Kuchaman City, Rajasthan",
    template: "%s | Modern Education Group"
  },
  description: "Modern Education Group is the top-ranked educational institution in Kuchaman City, Rajasthan. We shape future leaders through Modern English School, New Modern Senior Secondary School, and Modern Girls College.",
  keywords: [
    "Best school in Kuchaman City",
    "Top boarding school in Rajasthan",
    "RBSE school in Kuchaman",
    "Modern Education Group", 
    "Modern English School", 
    "Modern Girls College", 
    "New Modern Senior Secondary School",
    "Best science school in Rajasthan",
    "Girls boarding school in Rajasthan",
    "Top English medium school near me"
  ],
  authors: [{ name: "Modern Education Group" }],
  creator: "Modern Education Group",
  publisher: "Modern Education Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Modern Education Group | Premier Education in Rajasthan",
    description: "Discover the best educational experience in Kuchaman City. Admissions open for Modern English School, Girls College, and Senior Secondary.",
    url: 'https://moderneducation.group',
    siteName: 'Modern Education Group',
    images: [
      {
        url: '/images/campus.png',
        width: 1200,
        height: 630,
        alt: 'Modern Education Group Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modern Education Group | Kuchaman City",
    description: "Admissions Open! Shaping future leaders through our three elite campuses.",
    images: ['/images/campus.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-accent/30 selection:text-primary overflow-x-hidden">
        <ThemeProvider>
          <ScrollProvider>
            <ThreeBackground />
            {children}
            <PhoneCallButton />
            <WhatsAppButton />
          </ScrollProvider>
        </ThemeProvider>
        
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
