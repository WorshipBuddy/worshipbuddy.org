export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 py-10 bg-gray-900 text-gray-300 rounded-t-3xl">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Get it now</h2>
        <p className="text-lg">Available for iOS and Android</p>
      </div>
      <div className="flex gap-6">
        <a
          href="https://apps.apple.com/us/app/worshipbuddy/id6451153168"
          target="_blank"
          className="flex justify-center items-center"
        >
          <img
            src="/app-store-badge.png"
            alt="App Store"
            width = {150}
            height = {60}
            className="hover:opacity-80"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.NewTestamentChurch.Songbook&pcampaignid=web_share"
          target="_blank"
        >
          <img
            src="/google-play-badge.png"
            alt="Google Play Download"
            width = {190}
            height = {60}
            className="hover:opacity-80"
          />
        </a>
      </div>
      <div>&copy; 2025 WorshipBuddy</div>
    </footer>
  );
}