import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

// ✅ Lazy load pages (only load when needed)
const Hero = lazy(() => import("./components/hero"));
const About = lazy(() => import("./components/about"));
const Projects = lazy(() => import("./components/projects"));
const Resume = lazy(() => import("./components/resume"));
const Contact = lazy(() => import("./components/contact"));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <main className="font-sans bg-white scroll-smooth">
        <Navbar />

        {/* ✅ Suspense shows fallback while page loads */}
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer />
      </main>
    </Router>
  );
};

export default App;
