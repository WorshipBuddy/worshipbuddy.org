import Image from "next/image";

export default function Mockups() {
  return (
    <div className="flex justify-center -mt-16 relative z-10">
      <Image
        src="/mockups.png"
        width={600}
        height={500}
        alt="mockups"
        className="object-contain"
      />
    </div>
  );
}
