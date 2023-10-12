import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-2 items-center">
        <div className="text-4xl font-bold">Get it now</div>
        <div className="font-medium">Available for iOS and android </div>
      </div>
      <div className="flex gap-10">
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
      <div className="my-5">@2023 WorshipBuddy</div>
    </div>
  );
}
