// @ts-nocheck
import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Map from '../components/Contact/Map'; // Optional
import styles from '../styles/pages/ContactPage.css'; // Create ContactPage.module.css

function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <ContactForm />
      <ContactInfo />
       <Map /> 
    </div>
  );
}

export default ContactPage;