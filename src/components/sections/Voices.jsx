import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../../data/content";
import Reveal from "../ui/Reveal";
import "./Voices.css";

export default function Voices() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  return (
    <section className="voices section" aria-labelledby="voices-heading">
      <div className="container">
        <Reveal>
          <span className="section-label">Testimonials</span>

          <div className="voices__header">
            <div>
              <h2 id="voices-heading" className="section-title">
                Voices from
                <br />
                <em>collaborators</em>
              </h2>
            </div>

            <div className="voices__controls">
              <button onClick={scrollLeft} aria-label="Previous">
                ←
              </button>

              <button onClick={scrollRight} aria-label="Next">
                →
              </button>
            </div>
          </div>
        </Reveal>

        <div className="voices__stack" ref={sliderRef}>
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.15}>
              <blockquote className="voices__card" style={{ "--offset": i }}>
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
