import { testimonials } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Voices.css';

/* Design: Stacked offset cards — depth through layering
   instead of a carousel slider. */
export default function Voices() {
  return (
    <section className="voices section" aria-labelledby="voices-heading">
      <div className="container">
        <Reveal>
          <span className="section-label">Testimonials</span>
          <h2 id="voices-heading" className="section-title">
            Voices from<br /><em>collaborators</em>
          </h2>
        </Reveal>

        <div className="voices__stack">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.15}>
              <blockquote
                className="voices__card"
                style={{ '--offset': i }}
              >
                <p className="voices__quote">"{t.quote}"</p>
                <footer className="voices__author">
                  <span className="voices__name">{t.author}</span>
                  <span className="voices__role">{t.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
