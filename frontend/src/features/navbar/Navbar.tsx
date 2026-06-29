import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Resume", href: "https://drive.google.com/file/d/13f5-2DPu4LJAoKHuLmIBtuTw8uu0OcNg/view?usp=sharing" },
    { label: "LeetCode", href: "#contact" },
    { label: "Email", href: "mailto:aryandot1@gmail.com" },
    {label: "Skills", href: "#skills"}
  ];

  return (
    <>
      <nav className={`flex justify-between items-center py-7 px-6 md:px-12 sticky top-0 z-50 transition-colors duration-300 ${isDark ? "bg-zinc-950 text-white border-b border-zinc-800" : "bg-black text-white"}`}>
        <div className="logo text-xl font-bold">Aryan Kumar</div>

        <div className="flex items-center gap-4">
          {/* 🌙 Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-zinc-400 hover:text-white transition-colors text-xl"
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </button>

          {/* hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden block text-zinc-400 hover:text-white cursor-pointer text-xl font-bold"
          >
            {isOpen ? "X" : "☰"}
          </button>

          {/* desktop links */}
          <ul className="hidden sm:flex gap-6 justify-center text-center">
            {navLinks.map((x) => (
              <li
                key={x.label}
                className="cursor-pointer text-zinc-400 hover:text-white text-md font-medium transition-colors duration-200"
              >
                <a href={x.href}>{x.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* mobile menu */}
      {isOpen && (
        <ul className={`flex flex-col items-center gap-2 py-6 border-t sm:hidden transition-colors duration-300 ${isDark ? "bg-zinc-950 border-zinc-800" : "bg-black border-zinc-800"}`}>
          {navLinks.map((x) => (
            <li
              key={x.href}
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white text-base font-medium cursor-pointer transition-colors duration-200 w-full text-center py-2"
            >
              <a href={x.href}>{x.label}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;