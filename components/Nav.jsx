import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex px-4 my-5 top-0 z-20 text-white justify-between w-full font-medium sm:sticky sm:top-0">
      <Link href="/">
        <div className="font-semibold">WORSHIPBUDDY</div>
      </Link>
      <div className="flex gap-4">
        <Link href="/mission" className="">
          Mission
        </Link>
        <a
          href="https://worshipbuddy.atlassian.net/servicedesk"
          target="_blank"
        >
          Submit feedback
        </a>
      </div>
    </div>
  );
}
