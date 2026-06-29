import Hero from './features/hero/Hero'
import './App.css'
import Navbar from './features/navbar/Navbar'
import Projects from './features/projects/Projects'
import Contact from './features/contact/Contact'
import Footer from './features/footer/Footer'
import { useTheme } from './context/ThemeContext'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { isDark } = useTheme();

  return (
    <div className="relative min-h-screen transition-colors duration-300">

      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* solid base color */}
        <div className={`absolute inset-0 ${isDark ? "bg-zinc-950" : "bg-white"}`} />

        {/* dots */}
        {/* grid lines */}
<div className="absolute inset-0"
  style={{
    backgroundImage: `linear-gradient(${isDark ? "#ffffff08" : "#00000008"} 1px, transparent 1px),
                      linear-gradient(to right, ${isDark ? "#ffffff08" : "#00000008"} 1px, transparent 1px)`,
    backgroundSize: `40px 40px`
  }}
/>

        {/* blobs — no animation */}
        {isDark ? (
          <>
            <div className="absolute top-20 left-10 w-96 h-96 bg-violet-700 rounded-full filter blur-3xl opacity-20" />
            <div className="absolute top-60 right-10 w-96 h-96 bg-cyan-700 rounded-full filter blur-3xl opacity-20" />
            <div className="absolute bottom-40 left-1/3 w-96 h-96 bg-indigo-700 rounded-full filter blur-3xl opacity-20" />
          </>
        ) : (
          <>
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute top-60 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute bottom-40 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          </>
        )}
      </div>

      {/* text color wrapper */}
      <div className={`transition-colors duration-300 ${isDark ? "text-white" : "text-zinc-900"}`}>
        <Analytics/>
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;