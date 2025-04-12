export default function Overlay({ children }) {
  return (
    <div className="relative z-10 h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full brightness-50"
      >
        <source src="/worship-cut-up.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      <div className="relative">{children}</div>
    </div>
  );
}