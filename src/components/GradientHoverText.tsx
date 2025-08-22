import { useRef, useState } from "react";

type GradientHoverTextProps = {
  children: React.ReactNode;
  className?: string;
};

const GradientHoverText = ({
  children,
  className = "",
}: GradientHoverTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = textRef.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    el.style.setProperty(
      "--hover-gradient",
      `radial-gradient(circle at ${x}% ${y}%,rgb(43, 215, 198),rgb(114, 9, 212))`
    );
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    const el = textRef.current;
    if (el) {
      el.style.removeProperty("--hover-gradient");
    }
  };

  return (
    <span
      ref={textRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block font-bold transition duration-500 ease-in-out ${className}`}
      style={{
        backgroundImage: isHovering ? "var(--hover-gradient)" : "none",
        backgroundClip: isHovering ? "text" : "unset",
        WebkitBackgroundClip: isHovering ? "text" : "unset",
        color: isHovering ? "transparent" : "rgb(250, 250, 250)",
      }}
    >
      {children}
    </span>
  );
};

export default GradientHoverText;
