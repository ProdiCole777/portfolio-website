import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../images/Profileimage.webp";
import WeatherWidget from "./WeatherWidget";
import GradientHoverText from "./GradientHoverText";

const Hero = () => {
  // ----- Cursor Glow State -----
  const [shadowPos, setShadowPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  // ----- Track image size -----
  useEffect(() => {
    if (imgRef.current) {
      setImgSize({
        width: imgRef.current.offsetWidth,
        height: imgRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (imgRef.current) {
        setImgSize({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ----- Mouse move handlers -----
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setShadowPos({ x, y });
  };

  const handleMouseLeave = () => {
    setShadowPos({ x: imgSize.width / 2, y: imgSize.height / 2 });
  };

  return (
    <section className="bg-slate-800 min-h-screen py-20 px-6 relative">
      {/* Weather widget (desktop only) */}
      <div className="hidden md:block absolute top-6 left-6 z-40 h-screen justify-center animate-slideUpFadeIn">
        <WeatherWidget />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
        {/* Profile Image with cursor-follow glow */}
        <div
          className="w-full md:w-1/2 flex justify-center animate-slideUpFadeIn relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={ProfileImage}
            alt="Cole Fox"
            ref={imgRef}
            className="w-64 h-auto rounded-lg shadow-lg relative z-10"
          />
          {/* Glow div */}
          <div
            className="absolute rounded-lg pointer-events-none z-0"
            style={{
              width: `${imgSize.width}px`,
              height: `${imgSize.height}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: `${(shadowPos.x - imgSize.width / 2) / 10}px ${
                (shadowPos.y - imgSize.height / 2) / 10
              }px 30px 8px rgba(255, 255, 255, 0.7)`,
              transition: "box-shadow 0.1s ease-out",
            }}
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
          <h1 className="animate-slideUpFadeIn delay-200 text-5xl font-bold text-white leading-tight">
            <GradientHoverText>
              {" "}
              My name is Cole, a Full-Stack Developer{" "}
            </GradientHoverText>
            <span className="text-teal-400">bringing your ideas to light.</span>
          </h1>

          <p className="animate-slideUpFadeIn delay-400 mt-4 text-xl text-white">
            I design and build fast, accessible, and visually engaging
            applications using{" "}
            <span className="text-teal-400 font-bold">
              React, Tailwind CSS, and Node.js.
            </span>
          </p>

          <p className="animate-slideUpFadeIn delay-600 mt-4 text-xl text-white">
            My goal is to write{" "}
            <span className="text-teal-400 font-bold">clean code</span> to bring
            you the{" "}
            <span className="text-teal-400 font-bold">
              smoothest experience.
            </span>{" "}
            I’m passionate about{" "}
            <span className="text-teal-400 font-bold">
              solving any problems
            </span>{" "}
            you have.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slideUpFadeIn delay-800 mt-6 flex justify-center md:justify-start space-x-4">
            <Link
              to="/projects"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View My Work
            </Link>

            <Link
              to="/contact"
              className="bg-transparent border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-400 px-6 py-3 rounded-lg font-semibold transition"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
