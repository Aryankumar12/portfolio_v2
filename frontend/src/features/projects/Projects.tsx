import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";
import { useTheme } from "../../context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => setCurrent((c) => (c === 0 ? projectData.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projectData.length - 1 ? 0 : c + 1));

  // swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section id="projects" className="py-12 md:py-24 px-6 md:px-20">
      <h1 className="text-center text-4xl font-bold mb-10">Projects</h1>

      {/* Desktop — grid */}
      <div className="hidden md:grid grid-cols-2 gap-6 items-stretch justify-items-center max-w-5xl mx-auto">
        {projectData.map((x) => (
          <ProjectCard key={x.title} obj={x} />
        ))}
      </div>

      {/* Mobile — slider */}
      <div className="md:hidden relative">

        {/* card */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projectData.map((x) => (
              <div key={x.title} className="min-w-full px-1">
                <ProjectCard obj={x} />
              </div>
            ))}
          </div>
        </div>

        {/* prev / next buttons */}
        <div className="flex justify-between items-center mt-4 px-1">
          <button
            onClick={prev}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors
              ${isDark
                ? "border-zinc-700 text-zinc-300 hover:border-violet-500 hover:text-violet-400"
                : "border-zinc-300 text-zinc-600 hover:border-zinc-500"
              }`}
          >
            ‹
          </button>

          {/* dots */}
          <div className="flex gap-2 items-center">
            {projectData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300
                  ${i === current
                    ? isDark
                      ? "w-6 h-2 bg-violet-500"
                      : "w-6 h-2 bg-zinc-800"
                    : isDark
                      ? "w-2 h-2 bg-zinc-600"
                      : "w-2 h-2 bg-zinc-300"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors
              ${isDark
                ? "border-zinc-700 text-zinc-300 hover:border-violet-500 hover:text-violet-400"
                : "border-zinc-300 text-zinc-600 hover:border-zinc-500"
              }`}
          >
            ›
          </button>
        </div>

        {/* counter */}
        <p className={`text-center text-xs mt-3 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
          {current + 1} / {projectData.length}
        </p>
      </div>
    </section>
  );
};

export default Projects;