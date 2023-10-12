import Image from "next/image";

export default function Overlay({ children }) {
  return (
    <div className="relative z-1 h-screen">
      {/* Background Image using an img tag */}
      <Image
        width={1920}
        height={1080}
        src="/worship-cut-up.gif"
        alt="Worship Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Dark Overlay + Blur */}
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Black Opacity Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
