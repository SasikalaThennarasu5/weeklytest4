// components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="my-5">
      <h2>Contact</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
