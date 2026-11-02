import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Web Calculator</h3>
              <p className="text-gray-300 mb-4">
                A simple calculator built using HTML, CSS, and vanilla JavaScript. This project was
                created as a learning exercise to understand JavaScript fundamentals, DOM
                manipulation, and basic application logic.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "Vanilla JavaScript", "Git & GitHub"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=" flex space-x-4 mt-4">
                <a
                  href="https://github.com/SenzoSithole/Web-Calculator"
                  className="bg-blue-500/30 hover:bg-blue-500 text-white py-2 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Github
                </a>
                <a
                  href="https://senzosithole.github.io/Web-Calculator/"
                  className="bg-blue-500/30 hover:bg-blue-500 text-white py-2 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Demo
                </a>
              </div>
            </div>
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">NEXUS MAZE</h3>
              <p className="text-gray-300 mb-4">
                NEXUS MAZE is a first/third-person 3D maze game built with Three.js and Cannon-es.
                The player controls a glowing ball through a large sci-fi maze, collecting scattered
                items while dodging rotating obstacles, using bounce pads, speed boosts, and
                teleporters — all rendered in a night environment with a star-filled sky.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Three.js", "Cannon-es", "GLTFLoader", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=" flex space-x-4 mt-4">
                <a
                  href="https://github.com/SenzoSithole/Maze-Game"
                  className="bg-blue-500/30 hover:bg-blue-500 text-white py-2 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Github
                </a>
                <a
                  href="https://senzosithole.github.io/Maze-Game/"
                  className="bg-blue-500/30 hover:bg-blue-500 text-white py-2 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
