import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-full py-32 md:py-40 px-10 gap-10 md:gap-0">
      <Image
        src="/worship-buddy-white-logo.png"
        width={350}
        height={200}
        priority={true}
        alt="worship buddy logo"
        className="w-auto h-[200px] md:w-[350px] md:h-[350px] object-contain"
      />
      <div className="flex flex-col items-center md:items-start max-w-lg md:gap-2 gap-3">
        <div className="font-semibold text-2xl md:text-4xl">
          Worship songs for everyone
        </div>
        <div className="text-xl md:text-2xl text-center md:text-start">
          Access 1,000+ songs and curate custom worship sets
        </div>
        <div className="flex">
          <a
            href="https://apps.apple.com/us/app/worshipbuddy/id6451153168"
            target="_blank"
            className="flex justify-center items-center"
          >
            <Image
              src="/app-store-badge.png"
              width={150}
              height={60}
              alt="app store download"
              className="w-auto h-[45px] md:w-[150px] md:h-[60px] object-contain"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.NewTestamentChurch.Songbook&pcampaignid=web_share"
            target="_blank"
            className="flex justify-center items-center"
          >
            <Image
              src="/google-play-badge.png"
              width={190}
              height={60}
              alt="google play download"
              className="w-auto h-[60px] md:w-[180px] md:h-[80px] object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
