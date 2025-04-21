// @ts-nocheck
import React, { useState } from 'react';
import styles from '../../styles/components/contact/contactForm.module.css'; // Create Contact.module.css
import Button from '../common/Button'; // Assuming you have a Button component

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Por favor, completa todos los campos.');
      return;
    }

    // Basic email validation (you can use a more robust library)
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormError('Por favor, introduce un email válido.');
      return;
    }

    // Simulate form submission (replace with actual backend call)
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormError('');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactForm}>
      <h2>Contáctame</h2>
      {formSubmitted ? (
        <p className={styles.successMessage}>¡Gracias! Tu mensaje ha sido enviado.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {formError && <p className={styles.errorMessage}>{formError}</p>}
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
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
          ></textarea>
          <Button type="submit">Enviar</Button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;