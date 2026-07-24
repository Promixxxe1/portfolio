import { profile, skills } from '../../data/content';
import Reveal from '../ui/Reveal';
import './About.css';

/* Design: Magazine spread layout — pull quote as visual anchor,
   skills displayed as elegant tag clusters instead of progress bars. */
export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container">
        <Reveal>
          <span className="section-label">About</span>
          <h2 id="about-heading" className="section-title">
            The person behind<br /><em>the craft</em>
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.1}>
            <blockquote className="about__quote">
              <p>"{profile.pullQuote}"</p>
              <footer>— {profile.name}</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="about__content">
              <p className="about__text">{profile.bio}</p>
              <p className="about__text">
                Based in {profile.location}, I collaborate with clients and teams worldwide —
                bringing the same rigor to a landing page as to a full production system.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="about__skills">
          <Reveal delay={0.15}>
            <div className="about__skill-group">
              <h3 className="about__skill-heading">Frontend</h3>
              <ul className="about__tags">
                {skills.frontend.map((s) => (
                  <li key={s} className="about__tag">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="about__skill-group">
              <h3 className="about__skill-heading">Backend</h3>
              <ul className="about__tags">
                {skills.backend.map((s) => (
                  <li key={s} className="about__tag about__tag--sage">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
