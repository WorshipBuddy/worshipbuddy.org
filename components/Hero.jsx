import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-full py-40">
      <Image
        src="/worship-buddy-white-logo.png"
        width={350}
        height={200}
        alt="worship buddy logo"
      />
      <div className="flex flex-col max-w-lg gap-2">
        <div className="font-semibold text-4xl">Worship songs for everyone</div>
        <div className="text-2xl">
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
            />
          </a>
        </div>
      </div>
    </div>
  );
}
