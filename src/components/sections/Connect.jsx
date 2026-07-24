import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { profile } from '../../data/content';
import Reveal from '../ui/Reveal';
import Toast from '../ui/Toast';
import './Connect.css';

/* Design: Split contact panel — info as editorial column,
   form as a floating card with refined inputs. */
export default function Connect() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setToast({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setToast({ type: 'success', message: 'Message sent — I\'ll be in touch soon.' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setToast({ type: 'error', message: 'Something went wrong. Try emailing directly.' });
    } finally {
      setLoading(false);
    }
  }, [form]);

  return (
    <section id="connect" className="connect section" aria-labelledby="connect-heading">
      <div className="container connect__grid">
        <Reveal>
          <div className="connect__info">
            <span className="section-label">Contact</span>
            <h2 id="connect-heading" className="section-title">
              Let's build<br /><em>something</em>
            </h2>
            <p className="connect__intro">
              Have a project in mind? I'd love to hear about it.
              Drop a message or reach out directly.
            </p>

            <address className="connect__details">
              <a href={`mailto:${profile.email}`} className="connect__detail">
                <span className="connect__detail-label">Email</span>
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\D/g, '')}`} className="connect__detail">
                <span className="connect__detail-label">Phone</span>
                {profile.phone}
              </a>
            </address>

            <div className="connect__social">
              {profile.social.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.form
            className="connect__form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="connect__field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
            <div className="connect__field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
            <div className="connect__field">
              <label htmlFor="message">Tell me about your project</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="connect__submit" disabled={loading}>
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </motion.form>
        </Reveal>
      </div>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
