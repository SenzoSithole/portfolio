import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Responsive Design",
  ];

  const backendSkills = ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:border-blue-500 hover:-translate-y-0.5 transition-all">
            <p className="text-gray-300 mb-6">
              Full-stack developer in the making, currently sharpening my React skills by building
              this very site from scratch. I care about clean code, solid tooling, and learning
              things properly rather than just getting them working.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-0.5 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-0.5 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-6 border-white/10 border hover:border-blue-500 hover:-translate-y-0.5 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BSc in Computer Science</strong> - University of The Witwatersrand (2021 -
                  2025)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Algorithms, Computer Graphics and
                  Visualisation, Database Systems, Machine Learning, Parallel Computing, Web
                  Development and more.
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6 border-white/10 border hover:border-blue-500 hover:-translate-y-0.5 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    Quality Assurance Officer at Gauteng Department of Education (Nov 2024 - Dec
                    2025)
                  </h4>
                  <div className="list-disc list-inside space-y-2">
                    <li>
                      Audited and reconciled examination scripts province-wide, cross-referencing
                      candidate records against official data to identify and resolve discrepancies
                      at scale.
                    </li>
                    <li>
                      Conducted systematic per-script verification to confirm marking completeness
                      and score accuracy across all submissions.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
