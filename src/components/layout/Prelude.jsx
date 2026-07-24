import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Prelude.css';

/* Design: A brief cinematic intro — not a spinner.
   Sets tone with typography reveal before the main experience. */
export default function Prelude({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => onComplete(), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="prelude"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="prelude__inner">
            <motion.span
              className="prelude__word"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 0 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              PROMISED
            </motion.span>
            <motion.div
              className="prelude__line"
              initial={{ scaleX: 0 }}
              animate={phase >= 1 ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="prelude__sub"
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Enter the workspace
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
