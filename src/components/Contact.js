import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <form className="contact-form" action="none">
        <h1 className="contact-head">Reach Out to Me</h1>
        <input className="name" name="name" type="text" placeholder="Name" />
        <input
          className="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="message"
          name="message"
          type="textbox"
          placeholder="message"
        />
        <input className="submit" name="submit" type="submit" value="submit" />
      </form>
      <p className="copyright">© Vignesh</p>
    </section>
  );
};

export default Contact;
