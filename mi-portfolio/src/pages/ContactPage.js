// @ts-nocheck
import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import styles from '../styles/pages/ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPage} aria-labelledby="contact-title">
      <section className={styles.pageForm} aria-label="Formulario de contacto">
        <ContactForm />
      </section>

      <aside className={styles.pageInfo} aria-label="Información de contacto">
        <ContactInfo />
      </aside>

      {/* Bloque opcional para mapa o CTA extra */}
      {/* <section className={styles.pageMap} aria-label="Mapa de ubicación">
        <div className={styles.mapCard}>
          <iframe
            title="Mapa"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?..."
          />
        </div>
      </section> */}
    </div>
  );
}
