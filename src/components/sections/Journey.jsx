import { timeline } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Journey.css';

/* Design: Vertical spine timeline — alternating blocks
   with a continuous line, like a museum exhibition path. */
export default function Journey() {
  return (
    <section id="journey" className="journey section" aria-labelledby="journey-heading">
      <div className="container">
        <Reveal>
          <span className="section-label">Experience</span>
          <h2 id="journey-heading" className="section-title">
            The <em>journey</em> so far
          </h2>
        </Reveal>

        <ol className="journey__timeline">
          {timeline.map((item, i) => (
            <Reveal key={item.year + item.role} delay={i * 0.12}>
              <li className="journey__entry">
                <div className="journey__marker">
                  <span className="journey__year">{item.year}</span>
                </div>
                <div className="journey__card">
                  <h3 className="journey__role">{item.role}</h3>
                  <p className="journey__org">{item.org}</p>
                  <p className="journey__desc">{item.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
