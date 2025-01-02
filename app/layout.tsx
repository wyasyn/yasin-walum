import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const blackPast = localFont({
  src: "../assets/fonts/blackpast/blackpast-blackpast-400.ttf",
  variable: "--font-blackpast",
  weight: "400",
});

const oldEnglish = localFont({
  src: "../assets/fonts/oldEnglish/OldeEnglish.ttf",
  variable: "--font-oldenglish",
});

const darkCastle = localFont({
  src: "../assets/fonts/darkCastle/Darkcastle_PERSONAL_USE_ONLY.otf",
  variable: "--font-darkcastle",
});

export const metadata: Metadata = {
  title: {
    template:
      "%s - Yasin Walum | Software Developer, Machine Learning & Data Science Specialist",
    default:
      "Yasin Walum | Software Developer, Machine Learning & Data Science Specialist",
  },
  description:
    "Explore the portfolio of Yasin Walum, a skilled software developer specializing in full-stack development, machine learning, and data science. Discover innovative projects, professional experience, and technical expertise in cutting-edge technologies like Python, React, Docker, and more.",
  openGraph: {
    type: "website",
    url: "https://walum.com",
    siteName: "Yasin Walum",
    title:
      "Yasin Walum | Software Developer, Machine Learning & Data Science Specialist",
    description:
      "Explore the portfolio of Yasin Walum, a skilled software developer specializing in full-stack development, machine learning, and data science. Discover innovative projects, professional experience, and technical expertise in cutting-edge technologies like Python, React, Docker, and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dkdteb9m5/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731179025/personal%20finance/lj5hjqhmvaeqdsrfcwky.jpg",
        width: 1200,
        height: 630,
        alt: "Yasin Walum",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} ${blackPast.variable} ${oldEnglish.variable} ${darkCastle.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
