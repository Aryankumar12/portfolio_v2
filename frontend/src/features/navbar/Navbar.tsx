import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    {label : "Projects", href: "#projects"}, {label : "Skills", href: "#skills"}, {label : "Resume", href: "#resume"} , {label : "Contact", href: "#contact"}
  ]
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" bg-black text-white flex justify-between items-center py-7 px-6 md:px-12 sticky top-0 z-50">
        <div className="logo text-xl font-bold">Aryan Kumar</div>

        <div className="links">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden block text-zinc-400 hover:text-white cursor-pointer text-xl font-bold"
          >
            {isOpen ? "X" : "☰"}
          </button>
         
          <ul className="hidden sm:flex gap-6 justify-center text-center">
            {navLinks.map((x) => {
              return (
                <li
                  key={x.label}
                  className="cursor-pointer text-zinc-400 hover:text-white text-md font-medium transition-colors duration-200"
                  
                >
                  <a href={x.href}> {x.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {isOpen && (
        <ul className=" absolute right-0 top-20 w-1/2 flex flex-col items-center gap-2 bg-black text-white py-6 border-t border-zinc-800 z-40 sm:hidden">
          {navLinks.map((x) => {
            return (
              <li 
                key={x}
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white text-base font-medium cursor-pointer transition-colors duration-200 w-full text-center py-2"
              >
                {x}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Navbar;
