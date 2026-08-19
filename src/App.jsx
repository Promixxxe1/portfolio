import { useState, useCallback, useEffect } from "react";
import Prelude from "./components/layout/Prelude";
import SideNav from "./components/layout/SideNav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import About from "./components/sections/About";
import Work from "./components/sections/Work";
import Craft from "./components/sections/Craft";
import Journey from "./components/sections/Journey";
import Voices from "./components/sections/Voices";
import Connect from "./components/sections/Connect";
import Float from "./components/ui/Float";
import "./App.css";

export default function App() {
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return true;

    const storedTheme = window.localStorage.getItem("atrium-theme");
    return storedTheme ? storedTheme === "dark" : true;
  });

  const handlePreludeComplete = useCallback(() => setReady(true), []);
  const toggleTheme = useCallback(() => setTheme((current) => !current), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme ? "dark" : "light";
    document.documentElement.style.colorScheme = theme ? "dark" : "light";
    window.localStorage.setItem("atrium-theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <>
      {!ready && <Prelude onComplete={handlePreludeComplete} />}
      <div className={`page-shell ${ready ? "page-shell--visible" : ""}`}>
        <SideNav isDark={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Work />
          <Craft />
          <Journey />
          <Voices />
          <Connect />
        </main>
        <Float />
        <Footer />
      </div>
    </>
  );
}

// njnjnjnj