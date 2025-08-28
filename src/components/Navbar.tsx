import GradientHoverText from "./gradientHoverText";
import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import Logo from "../images/logo.webp";
import WeatherWidgetMini from "./weatherWidgetMini";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-lg shadow-teal-600 sticky top-0 z-50">
      <div className="px-3 py-2 container flex justify-between items-center relative">
        {/* Left Side: Logo + Name */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={Logo}
              alt="Cole Fox logo"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>
          <GradientHoverText className="text-3xl font-bold">
            Cole Fox
          </GradientHoverText>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-teal-400 transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Weather Mini & Mobile Hamburger Icon */}
        <div className="flex items-center space-x-4 md:hidden lg:hidden">
          <WeatherWidgetMini />

          {/* Hamburger icon on mobile */}
          <div className="md:hidden px-4">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <GradientHoverText className="text-3xl font-bold cursor-pointer">
                &#9776;
              </GradientHoverText>
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-4 mt-3 w-48 rounded-lg shadow-even-white bg-gradient-to-t from-slate-800 to-purple-700 p-4 z-50">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-2 font-bold text-white hover:text-teal-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
