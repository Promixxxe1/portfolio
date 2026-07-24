import { services } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Craft.css';

/* Design: Numbered service manifesto — editorial list format
   with oversized numerals as visual anchors. */
export default function Craft() {
  return (
    <section id="craft" className="craft section" aria-labelledby="craft-heading">
      <div className="container">
        <Reveal>
          <span className="section-label">What I Do</span>
          <h2 id="craft-heading" className="section-title">
            Craft &<br /><em>capability</em>
          </h2>
        </Reveal>

        <ol className="craft__list">
          {services.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.1}>
              <li className="craft__item">
                <span className="craft__num" aria-hidden="true">{item.num}</span>
                <div className="craft__body">
                  <h3 className="craft__title">{item.title}</h3>
                  <p className="craft__desc">{item.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
