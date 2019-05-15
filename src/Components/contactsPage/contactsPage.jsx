import React from 'react';
import YMap from '../YMaps/Ymaps';
import Footer from '../footer/footer';
import ContactForm from '../contactForm/contactForm';

import './contactsPage.css';

const ContactPage = () => (
  <section className="contacts">
    <div className="feedback">
      <h3>Contact form</h3>
      <p>Let's create something together! <br/>
        Or <a href="mailto:igonnacode@gmail.com">send me an email</a> if you want.
      </p>
      <ContactForm />
    </div>
    <YMap />
    <Footer />
  </section>
)

export default ContactPage;