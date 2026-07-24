import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/content';
import './Hero.css';

/* Design: Editorial hero — name as typographic sculpture,
   diagonal accent line, stats as marginalia rather than icon cards. */
export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short',
        }),
      );
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="intro" className="hero" aria-labelledby="hero-heading">
      <div className="hero__meta">
        <span className="section-label"> — Portfolio </span>
        <span className="hero__time" aria-live="polite">
          {time}
        </span>
      </div>

      <div className="hero__grid">
        <div className="hero__left">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profile.title} · {profile.tagline}
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__title-line">{profile.firstName}</span>
            <span className="hero__title-line hero__title-line--accent">
              {profile.lastName}
            </span>
          </motion.h1>

          <motion.div
            className="hero__accent-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="hero__bio">{profile.bio}</p>

          <div className="hero__stats">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="hero__stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#work" className="hero__btn hero__btn--primary">
              View selected work
            </a>
            <a href="#connect" className="hero__btn hero__btn--ghost">
              Start a conversation
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
