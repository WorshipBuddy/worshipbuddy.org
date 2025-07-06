import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 px-4 md:px-10 w-full">
      <Image
        src="/worship-buddy-white-logo.png"
        width={350}
        height={350}
        priority={true}
        alt="WorshipBuddy Logo"
        className="w-auto h-[150px] md:h-[300px] object-contain"
      />
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#10245c]">
          Worship songs for everyone
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-900">
          Access 1,000+ songs and curate custom worship sets. No Ads. No Purchases.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://apps.apple.com/us/app/worshipbuddy/id6451153168"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center flex items-center justify-center gap-2"
          >
            <FaApple className="text-xl" />
            Download on iOS
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.NewTestamentChurch.Songbook&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center flex items-center justify-center gap-2"
          >
            <FaGooglePlay className="text-xl" />
            Download on Android
          </Link>
        </div>
      </div>
    </div>
  );
}