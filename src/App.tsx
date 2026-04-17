import { useEffect, useState } from "react";
import data from "./data";
import { motion } from "framer-motion";

function App() {
  const [dark, setDark] = useState(false);

  // 🌙 AUTO DAY/NIGHT DETECTION
  useEffect(() => {
    const hour = new Date().getHours();
    setDark(hour >= 18 || hour < 6);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} scroll-smooth`}>

      {/* NAVBAR */}
      <div className="fixed top-0 w-full flex justify-center z-50 px-2">
        <div
          className={`mt-4 px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md flex gap-3 md:gap-6 text-xs md:text-sm backdrop-blur-md
          ${dark ? "bg-black/70 text-white" : "bg-white/70 text-black"}`}
        >
          <button onClick={() => scrollTo("hero")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("experience")}>Experience</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>

          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="underline">
            Resume
          </a>
        </div>
      </div>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-6 px-4"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-7xl font-semibold mb-4"
          >
            Hi, I'm {data.name}
          </motion.h1>

          <p
            className={`${dark ? "text-gray-300" : "text-gray-600"} text-base sm:text-lg md:text-xl`}
          >
            {data.role}
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={`mt-6 inline-block px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base transition duration-300 transform hover:scale-105
              ${
                dark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            Download Resume
          </a>
        </div>

        <img
          src={data.profile}
          alt="profile"
          className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full shadow-xl border-4 border-white hover:scale-105 transition duration-300"
        />
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 text-center px-4"
      >
        <p
          className={`max-w-xl md:max-w-2xl mx-auto text-base md:text-xl leading-relaxed
            ${dark ? "text-gray-200" : "text-gray-700"}`}
        >
          {data.bio}
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 text-center px-4"
      >
        <h2 className="text-2xl md:text-4xl mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {data.skills.map((s, i) => (
            <div
              key={i}
              className={`px-4 py-2 rounded-full text-sm transition hover:scale-105
                ${dark ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-800"}`}
            >
              {s}
            </div>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE (FIXED UI) */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 px-4"
      >
        <h2 className="text-2xl md:text-4xl text-center mb-10">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.experience.map((exp, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl transition hover:scale-[1.02]
                ${dark ? "bg-gray-900" : "bg-white shadow-md hover:shadow-xl"}`}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                {exp.title}
              </h3>

              <p className={`text-sm mb-3 ${dark ? "text-gray-400" : "text-gray-600"}`}>
                {exp.company} • {exp.duration}
              </p>

              <ul className="list-disc ml-5 space-y-1 text-sm">
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 px-4"
      >
        <h2 className="text-2xl md:text-5xl font-semibold text-center mb-10 md:mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {data.projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`rounded-2xl overflow-hidden transition
                ${dark ? "bg-gray-900" : "bg-white shadow-md hover:shadow-xl"}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 md:h-48 object-cover"
              />

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-2xl font-semibold">
                  {p.title}
                </h3>
                <p
                  className={`${dark ? "text-gray-400" : "text-gray-600"} mt-2 text-sm md:text-base`}
                >
                  {p.description}
                </p>

                <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 flex-wrap">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm
                      ${dark ? "bg-white text-black" : "bg-black text-white"}`}
                  >
                    GitHub
                  </a>

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 md:px-4 md:py-2 border rounded-full text-xs md:text-sm"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <section id="contact" className="py-12 md:py-16 text-center px-4">
        <h2 className="text-2xl md:text-5xl mb-6">
          Let’s work together.
        </h2>

        <a
          href={`mailto:${data.email}?subject=Hiring Inquiry`}
          className="text-sm md:text-lg underline hover:opacity-70 transition"
        >
          {data.email}
        </a>
      </section>

    </div>
  );
}

export default App;