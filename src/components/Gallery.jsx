import { useState } from "react";

const photos = [
  {
    src: "https://res.cloudinary.com/dpeojc51e/image/upload/c_limit,w_800/f_auto/q_auto/v1776243613/two_girls_nqqqgd",
    alt: "Two girls posing for a lifestyle portrait",
    tag: "Lifestyle",
    wide: false,
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpeojc51e/image/upload/c_limit,w_1200/f_auto/q_auto/v1776243618/baratnatyam_qmsh2z",
    alt: "Bharatanatyam dancer in traditional pose",
    tag: "Lifestyle",
    wide: true,
    type: "image",
  },
  {
    src: "",
    alt: "Lifestyle portrait image",
    tag: "Lifestyle",
    wide: false,
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpeojc51e/image/upload/c_limit,w_800/f_auto/q_auto/v1776243618/white_skuct_singer_dbvur2",
    alt: "Singer in white outfit during a portrait shoot",
    tag: "Lifestyle",
    wide: false,
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpeojc51e/image/upload/c_limit,w_800/f_auto/q_auto/v1776243615/black_rapwalk_xlwils",
    alt: "Model in black outfit during a fashion walk",
    tag: "Lifestyle",
    wide: false,
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpeojc51e/image/upload/c_limit,w_1200/f_auto/q_auto/v1776243617/yellow_walking_lqbrkt",
    alt: "Person walking in yellow outfit for a street-style shoot",
    tag: "Lifestyle",
    wide: true,
    type: "image",
  },
  {
    previewSrc: "/videos/prev_video.mp4",
    fullSrc: "/videos/full_video.mp4",
    alt: "Instagram reel shot by Durga Vinay Kumar",
    tag: "Video Frame",
    wide: false,
    type: "video",
  },
];

const tagColors = {
  Product: "#c8a96e",
  Brand: "#7eb8c8",
  Lifestyle: "#9ec87e",
  "Video Frame": "#c87ea4",
};

function GalleryVideo({ previewSrc, fullSrc, alt, className }) {
  const [playFull, setPlayFull] = useState(false);

  if (playFull) {
    return (
      <video
        src={fullSrc}
        controls
        autoPlay
        playsInline
        preload="metadata"
        className={className}
        aria-label={alt}
      />
    );
  }

  return (
    <div className="gallery__video-wrap">
      <video
        src={previewSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={className}
        aria-label={alt}
      />
      <button
        type="button"
        className="gallery__play-btn"
        aria-label="Play full video"
        onClick={() => setPlayFull(true)}
      >
        <span className="gallery__play-icon">▶</span>
      </button>
    </div>
  );
}

export default function Gallery() {
  const validItems = photos.filter(
    (item) => item.type === "video" || (item.src && item.src.trim() !== "")
  );

  return (
    <section id="work" className="gallery" aria-label="Photography portfolio">
      <div className="gallery__header">
        <h2 className="gallery__title">Selected Work</h2>
        <p className="gallery__subtitle">Product · Brand · Campaign · Reel</p>
      </div>

      <div className="gallery__grid">
        {validItems.map((item, i) => (
          <article
            key={i}
            className={`gallery__item${item.wide ? " gallery__item--wide" : ""}`}
          >
            <div className="gallery__thumb">
              {item.type === "video" ? (
                <GalleryVideo
                  previewSrc={item.previewSrc}
                  fullSrc={item.fullSrc}
                  alt={item.alt}
                  className="gallery__img"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="gallery__img"
                />
              )}
              <div className="gallery__overlay" aria-hidden="true" />
            </div>

            <span
              className="gallery__tag"
              style={{ "--tag-color": tagColors[item.tag] || "#c8a96e" }}
            >
              {item.tag}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}