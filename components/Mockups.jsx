import Image from "next/image";

export default function Mockups() {
  return (
    <div className="flex justify-center -mt-32 relative z-10">
      <Image
        src="/mockups2.png"
        width={1000}
        height={500}
        alt="mockups"
        className="object-contain"
      />
    </div>
  );
}
