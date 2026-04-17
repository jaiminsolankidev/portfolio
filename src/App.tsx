import { useState } from "react";
import data from "./data";
import { motion } from "framer-motion";

function App() {
  const [dark, setDark] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>

      {/* NAVBAR */}
      <div className="fixed top-0 w-full flex justify-center z-50">
        <div className={`mt-4 px-6 py-3 rounded-full shadow-md flex gap-6 text-sm backdrop-blur-md
          ${dark ? "bg-black/70 text-white" : "bg-white/70 text-black"}`}>

          <button onClick={() => scrollTo("hero")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>

          <a 
            href="/resume.pdf" 
            target="_blank"
            className="font-semibold underline"
          >
            Resume
          </a>

          <button onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 className="text-6xl md:text-7xl font-semibold mb-4">
          Hi, I'm {data.name}
        </motion.h1>

        <p className={dark ? "text-gray-300 text-xl" : "text-gray-600 text-xl"}>
          {data.role}
        </p>

        {/* DOWNLOAD BUTTON */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="mt-6 px-6 py-3 bg-black text-white rounded-full"
        >
          Download Resume
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-40 text-center px-6">
        <p className={`max-w-2xl mx-auto text-xl ${dark ? "text-gray-300" : "text-gray-600"}`}>
          {data.bio}
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-40 px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {data.projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl overflow-hidden transition
                ${dark ? "bg-gray-900" : "bg-white shadow-md hover:shadow-xl"}`}
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className={dark ? "text-gray-400 mt-2" : "text-gray-600 mt-2"}>
                  {p.description}
                </p>

                <div className="flex gap-4 mt-6">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-black text-white rounded-full text-sm"
                  >
                    GitHub
                  </a>

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border rounded-full text-sm"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Let’s work together.
        </h2>

        <p className="text-lg">{data.email}</p>
      </section>

    </div>
  );
}

export default App;