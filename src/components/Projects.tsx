import GradientHoverText from "./GradientHoverText";

type Project = {
  title: string;
  description: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "To-Do List App",
    description:
      "A simple, clean to-do list made with HTML, CSS, and a little JS",
    githubUrl: "https://todo-list-app-six-ochre.vercel.app/",
  },
  {
    title: "Bible Verse Randomizer",
    description:
      "Displays random Bible verses using React, TypeScript, and styled with Tailwind CSS.",
    githubUrl: "https://bible-verse-randomizer.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-800 py-10 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto text-center md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 lg:leading-relaxed lg:pb-1 animate-slideUpFadeIn">
          <GradientHoverText>Projects</GradientHoverText>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 animate-slideUpFadeIn">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-800 p-6 rounded-xl shadow-even-white text-left hover:shadow-even-white hover:bg-slate-400 hover:scale-95 transition transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 ">
                <GradientHoverText>{project.title}</GradientHoverText>
              </h3>
              <p className="text-white">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
