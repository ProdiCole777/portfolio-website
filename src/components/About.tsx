import GradientHoverText from "./GradientHoverText";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="bg-slate-900 py-20 px-4 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Card wrapper */}
        <Card size="xl" className="relative">
          <CardContent>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex animate-slideUpFadeIn">
              <GradientHoverText>About Me</GradientHoverText>
            </h2>

            <p className="text-white text-2xl flex animate-slideUpFadeIn">
              I'm a self-taught developer passionate about building clean,
              functional, and user-friendly applications. I started learning in
              April 2025, beginning with HTML and CSS, and I'm currently
              exploring JavaScript, React, TypeScript, and Tailwind CSS. I love
              solving problems and turning ideas into interactive digital
              experiences.
            </p>

            <div className="mt-6 flex justify-center md:justify-start space-x-4 animate-slideUpFadeIn">
              <Link
                to="/projects"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                View My Work
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
