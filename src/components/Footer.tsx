// src/components/Footer.tsx
import html5 from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/javascript.svg";
import ts from "../assets/icons/typescript.svg";
import react from "../assets/icons/react.svg";
import nodejs from "../assets/icons/nodedotjs.svg";

import python from "../assets/icons/python.svg";
import vue from "../assets/icons/vuedotjs.svg";
import angular from "../assets/icons/angular.svg";
import ios from "../assets/icons/ios.svg";
import android from "../assets/icons/android.svg";
import nextjs from "../assets/icons/nextdotjs.svg";
import django from "../assets/icons/django.svg";
import mysql from "../assets/icons/mysql.svg";
import cpp from "../assets/icons/cplusplus.svg";
import csharp from "../assets/icons/sharp.svg";
import c from "../assets/icons/c.svg";
import php from "../assets/icons/php.svg";
import dotnet from "../assets/icons/dotnet.svg";

const Footer = () => {
  const learned = [
    { name: "HTML", icon: html5 },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "TypeScript", icon: ts },
    { name: "React", icon: react },
    { name: "Node.js", icon: nodejs },
  ];

  const learning = [
    { name: "Python", icon: python },
    { name: "Vue", icon: vue },
    { name: "Angular", icon: angular },
    { name: "iOS", icon: ios },
    { name: "Android", icon: android },
    { name: "Next.js", icon: nextjs },
    { name: "Django", icon: django },
    { name: "SQL", icon: mysql },
    { name: "C++", icon: cpp },
    { name: "C#", icon: csharp },
    { name: "C", icon: c },
    { name: "PHP", icon: php },
    { name: ".NET", icon: dotnet },
  ];

  return (
    <footer className="bg-slate-900 border-t-4 border-t-teal-600 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-6 items-start">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Cole Fox. All rights reserved.</p>
        </div>

        {/* Skills Learned */}
        <div>
          <h3 className="font-semibold mb-2 text-teal-400">Skills Learned</h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {learned.map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-1 bg-teal-600 px-2 py-1 rounded text-sm md:transition md:transform md:hover:scale-110 md:hover:bg-teal-500 cursor-default"
              >
                <img src={tech.icon} alt={tech.name} className="hidden md:inline w-4 h-4" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Learning */}
        <div>
          <h3 className="font-semibold mb-2 text-teal-400">Skills Learning</h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {learning.map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-1 bg-teal-800 px-2 py-1 rounded text-sm md:transition md:transform md:hover:scale-110 md:hover:bg-teal-700 cursor-default"
              >
                <img src={tech.icon} alt={tech.name} className="hidden md:inline w-4 h-4" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
