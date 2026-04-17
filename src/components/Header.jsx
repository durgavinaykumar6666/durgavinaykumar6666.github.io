import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <a
        href="#"
        className="site-header__logo"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Durga Vinay Kumar
      </a>

      {/* Desktop nav */}
      <nav className="site-header__nav" aria-label="Main navigation">
        <a href="#work" onClick={(e) => handleNav(e, "#work")}>Work</a>
        <a href="#about" onClick={(e) => handleNav(e, "#about")}>About</a>
        <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>Contact</a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`site-header__burger${menuOpen ? " is-open" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <nav className={`site-header__drawer${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
        <a href="#work" onClick={(e) => handleNav(e, "#work")}>Work</a>
        <a href="#about" onClick={(e) => handleNav(e, "#about")}>About</a>
        <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>Contact</a>
      </nav>
    </header>
  );
}
