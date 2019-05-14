import React from 'react';
import YMap from '../YMaps/Ymaps';
import Footer from '../footer/footer';

import './contactsPage.css';

const ContactPage = () => (
  <section className="contacts">
    <div className="feedback">
      <h3>Contact form</h3>
      <p>Let's create something together! <br/>
        Or <a href="mailto:igonnacode@gmail.com">email me</a> if you want.
      </p>
      <form action="/mail" method="POST" className="feedback__form">
      </form>
    </div>
    <YMap />
    <Footer />
  </section>
)

export default ContactPage;