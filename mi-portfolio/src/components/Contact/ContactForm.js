// @ts-nocheck
import React, { useState } from 'react';
import styles from '../../styles/components/contact/contactForm.module.css';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Por favor, completa todos los campos.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormError('Por favor, introduce un email válido.');
      return;
    }

    // Envío simulado (sustituye por tu backend)
    console.log('Form submitted:', formData);

    setFormSubmitted(true);
    setFormError('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contactForm} aria-labelledby="contact-title">
      <h2 id="contact-title">Contáctame</h2>

      {formSubmitted ? (
        <p className={styles.successMessage} role="status">
          ¡Gracias! Tu mensaje ha sido enviado.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {formError && <p className={styles.errorMessage}>{formError}</p>}

          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="primary">Enviar</Button>
        </form>
      )}
    </section>
  );
}
