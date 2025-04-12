import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-20 w-full bg-gray-900/80 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 shadow-md">
      <div className="flex justify-between items-center text-white">
        <Link href="/">
          <div className="text-xl md:text-2xl font-bold tracking-wide">WORSHIPBUDDY</div>
        </Link>
        <div className="flex gap-4 md:gap-6 text-sm md:text-lg">
          <Link href="/mission" className="hover:text-gray-300">
            Mission
          </Link>
          <a
            href="https://worshipbuddy.atlassian.net/servicedesk"
            target="_blank"
            className="hover:text-gray-300"
          >
            Feedback
          </a>
        </div>
      </div>
    </nav>
  );
}