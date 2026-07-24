import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Toast.css';

export default function Toast({ type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className={`toast toast--${type}`}
        role="alert"
        initial={{ opacity: 0, y: 20, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        exit={{ opacity: 0, y: 20, x: '-50%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <span className="toast__icon">{type === 'success' ? '✓' : '!'}</span>
        <p className="toast__message">{message}</p>
        <button className="toast__close" onClick={onClose} aria-label="Dismiss">
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
