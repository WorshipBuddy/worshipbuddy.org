import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WorshipBuddy",
  description:
    "WorshipBuddy is a free app with over thousand christian songs included.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="WorshipBuddy" />
        <meta
          property="og:description"
          content="WorshipBuddy is a free app with over thousand christian songs included"
        />
        <meta
          property="og:image"
          content="https://worshipbuddy.org/mockups2.png"
        />
        <meta property="og:url" content="https://worshipbuddy.org/" />
        <meta property="og:type" content="website"></meta>
      </head>
      <body className={`${inter.className} bg-neutral-900 relative`}>
        {children}
      </body>
    </html>
  );
}
