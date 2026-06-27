const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center gap-4 py-6 px-4 border-t border-zinc-800">
      
      <h2 className="text-lg font-bold">Aryan Kumar</h2>

      <div className="flex gap-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm">
          LinkedIn
        </a>
        <a href="mailto:aryandot1@gmail.com" className="text-zinc-400 hover:text-white transition-colors text-sm">
          Email
        </a>
      </div>

      <p className="text-xs text-zinc-500">
        © {new Date().getFullYear()} Aryan Kumar. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;