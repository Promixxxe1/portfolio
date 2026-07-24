import { profile } from '../../data/content';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__tag">{profile.title}</span>
        </div>
        <p className="footer__copy">
          © {year} {profile.firstName} {profile.lastName}. Crafted with intention.
        </p>
        <a href="#intro" className="footer__top" aria-label="Back to top">
          Top ↑
        </a>
      </div>
    </footer>
  );
}
