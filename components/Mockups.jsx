import Image from "next/image";

export default function Mockups() {
  return (
    <div className="flex justify-center items-center px-4 md:px-10 -mt-16 md:-mt-32 relative z-10">
      <Image
        src="/mockups2.png"
        width={1000}
        height={500}
        alt="Mockups"
        className="w-full max-w-[90%] md:max-w-[80%] h-auto object-contain"
      />
    </div>
  );
}