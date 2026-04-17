export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.querySelector("#work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__image-wrap">
        <img
          src="https://res.cloudinary.com/dpeojc51e/image/upload/v1776243619/black_stand_singer_w4gy2t.jpg"
          alt="Hero product photograph by Busina Vinay Kumar"
          className="hero__image"
          loading="eager"
        />
        <div className="hero__image-overlay" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Visakhapatnam, India</p>
        <h1 className="hero__heading">
          Product &amp;&nbsp;Brand<br />
          Photographer
        </h1>
        <p className="hero__sub">
          Crafting images that make products impossible to ignore —
          from precision-lit studio shots to full brand campaigns
          and cinematic reels.
        </p>
        <a href="#work" className="hero__cta" onClick={handleScroll}>
          View Work
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Decorative scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
