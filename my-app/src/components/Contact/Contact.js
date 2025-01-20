import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email && !contact.github && !contact.linkedin) return null;

  return (
    <section className="section contact center" id="contact">
      <div className="title">
        <h2 className="section__title">Contact</h2>
      </div>
      <div className="contact_btns">
        {contact.email && (
          <a href={`mailto:${contact.email}`}>
            <span type="button" className="btn btn--outline">
              Email me
            </span>
          </a>
        )}
        {contact.github && (
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <span type="button" className="btn btn--outline">
              GitHub
            </span>
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <span type="button" className="btn btn--outline">
              LinkedIn
            </span>
          </a>
        )}
      </div>
    </section>
  );
};

export default Contact;
