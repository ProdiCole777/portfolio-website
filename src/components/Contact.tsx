import { Mail, Linkedin, Github, Twitter } from "./ui/icons";
import GradientHoverText from "./GradientHoverText";
import { Card, CardContent } from "./ui/card";

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
            Have a question, want to collaborate, or just say hello? Fill out the form below and I’ll get back to you.
          </p>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mgvlokqd" // <-- Replace with your Formspree ID
            method="POST"
            className="flex flex-col gap-4 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-600 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-gray-600 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-md border border-gray-600 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-teal-400 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition w-full sm:w-auto mx-auto"
            >
              <Mail className="w-5 h-5" /> Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/cole-fox-9282a4381/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-1/2 sm:w-auto mx-auto"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>

            <a
              href="https://github.com/ProdiCole777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition w-1/2 sm:w-auto mx-auto"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>

            <a
              href="https://x.com/@TheProdiColeDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition w-1/2 sm:w-auto mx-auto"
            >
              <Twitter className="w-5 h-5" /> X (Twitter)
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
