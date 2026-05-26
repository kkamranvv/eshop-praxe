import './ContactInfo.css'
import ContactDetails from './ContactDetails';
import ContactPromise from './ContactPromise';

const ContactInfo = () => {
  return (
    <div className="contact-info">
        <div className="contact-header">
            <h3>Contact</h3>
        </div>
      <div className="contact-line">
            <h2>Drop us a line.</h2>
      </div>
        <div className="contact-text">
            <p>Questions about an order, a product, or the shop itself — we read everything.</p>
        </div>
        <ContactDetails />
        <ContactPromise />
    </div>
  );
};

export default ContactInfo;