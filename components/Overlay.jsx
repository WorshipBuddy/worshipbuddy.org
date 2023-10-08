export default function Overlay({ children }) {
  return (
    <div className="relative z-1">
      {/* Background Image */}
      <div className="absolute inset-0 bg-worship bg-cover bg-no-repeat bg-center"></div>

      {/* Dark Overlay + Blur */}
      <div className="absolute inset-0 backdrop-blur-md"></div>

      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
