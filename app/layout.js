import Nav from "@/components/Nav";
import CursorBuddy from "@/components/shared/CursorBuddy";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "WorshipBuddy | Free Worship Tools for Every Church",
  description:
    "WorshipBuddy is a 501(c)(3) nonprofit building free tools for worship teams — song management, church scheduling, and presentation software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-surface">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#10245c" />
        <meta name="msapplication-TileColor" content="#10245c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="WorshipBuddy" />
        <meta property="og:description" content="Free worship tools for every church — song management, scheduling, and presentation software." />
        <meta property="og:image" content="https://worshipbuddy.org/mockups2.png" />
        <meta property="og:url" content="https://worshipbuddy.org/" />
        <meta property="og:type" content="website" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9X4NEJ7Z5T" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9X4NEJ7Z5T');
            `,
          }}
        />
      </head>
      <body className="font-sans bg-surface text-gray-700 min-h-screen antialiased">
        <Nav />
        <CursorBuddy />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
