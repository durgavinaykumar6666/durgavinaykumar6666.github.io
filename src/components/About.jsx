const services = [
  "Product Photography",
  "Brand Campaigns",
  "Social Media Content",
  "Short Promos & Reels",
  "Lifestyle & Flat Lay",
  "Video Editing",
];

export default function About() {
  return (
    <section id="about" className="about" aria-label="About Durga Vinay Kumar">
      <div className="about__inner">
        <div className="about__portrait-wrap">
          <img
            src="https://res.cloudinary.com/dpeojc51e/image/upload/v1776243616/vinay_photo_wqqb0r.png"
            alt="Busina Vinay Kumar, photographer"
            className="about__portrait"
            loading="lazy"
          />
          <div className="about__portrait-accent" aria-hidden="true" />
        </div>

        <div className="about__text">
          <p className="about__eyebrow">The photographer</p>
          <h2 className="about__heading">About Busina Vinay Kumar</h2>

          <p className="about__bio">
            Based in Visakhapatnam, I specialise in product and brand photography
            that goes beyond documentation — every frame is composed to sell, to
            tell a story, and to make your audience stop scrolling. With a sharp
            eye for light, texture, and detail, I work with brands ranging from
            local startups to established labels across FMCG, beauty, food &amp;
            beverage, and fashion.
          </p>
          <p className="about__bio">
            Beyond stills, I produce short-form video content and brand reels
            optimised for Instagram and social platforms — full post-production
            included.
          </p>

          <ul className="about__services" aria-label="Services offered">
            {services.map((s) => (
              <li key={s} className="about__service-item">
                <span className="about__service-dot" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
