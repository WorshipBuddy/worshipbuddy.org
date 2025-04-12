import Image from "next/image";

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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Worship songs for everyone
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Access 1,000+ songs and curate custom worship sets.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="https://apps.apple.com/us/app/worshipbuddy/id6451153168"
            target="_blank"
            className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-medium hover:bg-gray-200"
          >
            Download on iOS
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.NewTestamentChurch.Songbook&pcampaignid=web_share"
            target="_blank"
            className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-medium hover:bg-gray-200"
          >
            Download on Android
          </a>
        </div>
      </div>
    </div>
  );
}