import { marqueeItems } from '../../data/content';
import './Marquee.css';

/* Design: Infinite horizontal ribbon — kinetic typography
   replacing a static "skills grid" with continuous motion. */
export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
            <span className="marquee__sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
