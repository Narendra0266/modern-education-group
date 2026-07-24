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
  title: "Modern Education Group | Shaping Tomorrow's Leaders",
  description: "Welcome to Modern Education Group. Shaping future leaders through three elite institutions: Modern English School, New Modern Senior Secondary School, and Modern Girls College.",
  keywords: ["Modern Education Group", "Modern English School", "Modern Girls College", "New Modern Senior Secondary School", "elite education", "STEM academy", "women leadership"],
  authors: [{ name: "Modern Education Group" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

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
      </body>
    </html>
  );
}
