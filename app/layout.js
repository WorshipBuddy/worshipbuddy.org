import Nav from "@/components/Nav";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
});

export const metadata = {
  title: "WorshipBuddy",
  description:
    "WorshipBuddy is a free app with over a thousand Christian songs included.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
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
          content="WorshipBuddy is a free app with over a thousand Christian songs included"
        />
        <meta
          property="og:image"
          content="https://worshipbuddy.org/mockups2.png"
        />
        <meta property="og:url" content="https://worshipbuddy.org/" />
        <meta property="og:type" content="website"></meta>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-9X4NEJ7Z5T`}
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9X4NEJ7Z5T');
            `,
          }}
        ></script>
      </head>

      <body className={`${plusJakarta.variable} font-sans bg-white text-gray-900 min-h-screen`}>
        <Nav />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}