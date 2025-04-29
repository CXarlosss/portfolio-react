// @ts-nocheck
import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import styles from '../styles/pages/ContactPage.module.css'; // Create ContactPage.module.css

function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <ContactForm />
      <ContactInfo />
      
    </div>
  );
}

export default ContactPage;