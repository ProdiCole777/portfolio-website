const Footer = () => {
  const learned = [
    { name: "HTML", icon: "/src/assets/icons//html5.svg" },
    { name: "CSS", icon: "/src/assets/icons/css.svg" },
    { name: "JavaScript", icon: "/src/assets/icons/javascript.svg" },
    { name: "TypeScript", icon: "/src/assets/icons/typescript.svg" },
    { name: "React", icon: "/src/assets/icons/react.svg" },
    { name: "Node.js", icon: "/src/assets/icons/nodedotjs.svg" },
  ];

  const learning = [
    { name: "Python", icon: "/src/assets/icons/python.svg" },
    { name: "Vue", icon: "/src/assets/icons/vuedotjs.svg" },
    { name: "Angular", icon: "/src/assets/icons/angular.svg" },
    { name: "iOS", icon: "/src/assets/icons/ios.svg" },
    { name: "Android", icon: "/src/assets/icons/android.svg" },
    { name: "Next.js", icon: "/src/assets/icons/nextdotjs.svg" },
    { name: "Django", icon: "/src/assets/icons/django.svg" },
    { name: "SQL", icon: "/src/assets/icons/mysql.svg" },
    { name: "C++", icon: "/src/assets/icons/cplusplus.svg" },
    { name: "C#", icon: "/src/assets/icons/sharp.svg" },
    { name: "C", icon: "/src/assets/icons/c.svg" },
    { name: "PHP", icon: "/src/assets/icons/php.svg" },
    { name: ".NET", icon: "/src/assets/icons/dotnet.svg" },
  ];

  return (
    <footer className="bg-slate-900 border-t-4 border-t-teal-600 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-6 items-start">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Cole Fox. All rights reserved.
          </p>
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
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="hidden md:inline w-4 h-4"
                />
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
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="hidden md:inline w-4 h-4"
                />
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
