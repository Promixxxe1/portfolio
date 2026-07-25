import { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Work.css';

/* Design: Horizontal project gallery — full-bleed cards you scroll through
   like an exhibition catalog, not a uniform grid. */
export default function Work() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  return (
    <section id="work" className="work section" aria-labelledby="work-heading">
      <div className="container work__header">
        <Reveal>
          <span className="section-label">Selected Work</span>
          <h2 id="work-heading" className="section-title">
            Projects that<br /><em>define me</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="work__controls">
            <button onClick={() => scroll(-1)} aria-label="Previous projects" className="work__ctrl">
              ←
            </button>
            <button onClick={() => scroll(1)} aria-label="Next projects" className="work__ctrl">
              →
            </button>
          </div>
        </Reveal>
      </div>

      <div className="work__track-wrap">
        <div className="work__track" ref={trackRef} role="list">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="work__card"
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="work__card-accent" style={{ background: project.color }} />
              <div className="work__card-inner">
                <div className="work__card-top">
                  <span className="work__category">{project.category}</span>
                  <span className="work__year">{project.year}</span>
                </div>
                <h3 className="work__card-title">{project.title}</h3>
                <p className="work__card-desc">{project.description}</p>
                <ul className="work__tech" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="work__links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="work__link">
                    Live site ↗
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="work__link work__link--muted">
                    
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
