import { Card, CardContent } from "../components/ui/card";
import GradientHoverText from "./GradientHoverText";

export default function Resume() {
  return (
    <section className="bg-slate-800 mx-auto flex flex-col items-center justify-center min-h-screen px-4 py-12 px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 animate-slideUpFadeIn">
        <GradientHoverText>Resume</GradientHoverText>
      </h1>

      {/* Resume Summary Card */}
      <Card className="bg-gradient-to-tl from-purple-400 to-purple-900 animate-slideUpFadeIn">
        <CardContent>
          <h2 className="text-xl text-white font-semibold mb-2">
            How it began
          </h2>
          <p className="leading-relaxed text-white">
            I officially began learning Full-Stack development in March of 2025,
            right around the time my son was born. Balancing life as a new
            father with becoming a developer has been both challenging and
            rewarding. Through consistent learning, building projects, and
            staying grounded in faith, I’ve developed skills in React,
            TypeScript, TailwindCSS, and more—all while caring for my growing
            family.
          </p>
          <p className="pt-4 text-white">
            Below is an extended resume to show what I've learned from my
            previous jobs and how I can apply them to software development
            career moving forward.
          </p>
        </CardContent>
      </Card>

      {/* Download Resume button */}
      <div className="mt-6 animate-slideUpFadeIn">
        <a
          href="/resume.pdf"
          target="_blank"
          download="Cole_Fox_Resume.pdf"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-teal-400 hover:bg-teal-600 text-white rounded-lg shadow transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
