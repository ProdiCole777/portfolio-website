import { Mail, Linkedin, Github, Twitter } from "./ui/icons";
import GradientHoverText from "./GradientHoverText";
import { Card, CardContent } from "../components/ui/card";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-800 min-h-screen flex items-center justify-center px-4"
    >
      <Card className="max-w-xl bg-slate-900 text-center animate-slideUpFadeIn">
        <CardContent>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <GradientHoverText>Contact Me</GradientHoverText>
          </h2>

          {/* Decorative line */}
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto mb-6"></div>

          {/* Intro text */}
          <p className="text-gray-300 mb-8">
            Have a question, want to collaborate, or just say hello? I’d love to
            hear from you.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:ProdiCole.Dev@gmail.com"
              className="flex items-center justify-center gap-2 bg-teal-400 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition w-1/2 sm:w-auto mx-auto"
            >
              <Mail size={20} /> Email
            </a>

            <a
              href="https://linkedin.com/in/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-1/2 sm:w-auto mx-auto"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition w-1/2 sm:w-auto mx-auto"
            >
              <Github size={20} /> GitHub
            </a>

            <a
              href="https://x.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition w-1/2 sm:w-auto mx-auto"
            >
              <Twitter size={20} /> X (Twitter)
            </a>
          </div>

          {/* Closing sentence */}
          <p className="text-gray-400 mt-8 italic">
            “Let’s build something great together.”
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
