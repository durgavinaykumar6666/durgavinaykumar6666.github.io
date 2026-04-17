export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          © {year} Durga Vinay Kumar. All rights reserved.
        </p>
        <p className="site-footer__loc">Visakhapatnam, India</p>
      </div>
    </footer>
  );
}
