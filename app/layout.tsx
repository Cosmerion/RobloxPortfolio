import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PleaseRestore's Roblox Portfolio",
  description:
    "Owner, Project Manager & Sole Programmer. Specialized in backend systems, frontend development, scalable Roblox architecture, optimization, gameplay systems, UI development, and project leadership.",
  keywords: [
    "Roblox",
    "Roblox Developer",
    "PleaseRestore",
    "Luau",
    "TypeScript",
    "rbxts",
    "Game Developer",
    "Portfolio",
    "Flamework",
    "Backend Systems",
  ],
  openGraph: {
    title: "PleaseRestore's Roblox Portfolio",
    description:
      "Sole programmer behind advanced Roblox experiences — combat systems, backend architecture, UI systems, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PleaseRestore's Roblox Portfolio",
    description: "Premium Roblox developer portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full antialiased" style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
