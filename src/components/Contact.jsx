const contacts = [
  {
    label: "Email",
    value: "durgavinaykumar6666@gmail.com",
    href: "mailto:durgavinaykumar6666@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp / Phone",
    value: "+91 94928 19991",
    href: "https://wa.me/919492819991",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2a8 8 0 0 1 6.93 12.01L18 18l-4.13-1.08A8 8 0 1 1 10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M7.5 8.5c.3.7.8 1.4 1.5 2 .7.6 1.4 1 2.1 1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@durgavinaykumar",
    href: "https://www.instagram.com/vinay.busina/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="14.5" cy="5.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact">
      <div className="contact__inner">
        <div className="contact__left">
          <p className="contact__eyebrow">Let's collaborate</p>
          <h2 className="contact__heading">Book a&nbsp;shoot</h2>
          <p className="contact__sub">
            For product shoots, brand campaigns, and social-media content —
            reach out and let's create something exceptional together.
          </p>
        </div>

        <ul className="contact__list" aria-label="Contact methods">
          {contacts.map((c) => (
            <li key={c.label} className="contact__item">
              <a
                href={c.href}
                className="contact__link"
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="contact__icon">{c.icon}</span>
                <span className="contact__details">
                  <span className="contact__item-label">{c.label}</span>
                  <span className="contact__item-value">{c.value}</span>
                </span>
                <svg className="contact__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
