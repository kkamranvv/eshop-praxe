import './ContactDetails.css'

const ContactDetails = () => {
  return (
    <div className="contact-details">
        <div className="contact-item">
            <p><strong>Email:</strong> <span className="contact-value">shop@praxe.local</span></p>
        </div>
        <div className="contact-item">
            <p><strong>Phone:</strong> <span className="contact-value">+420 222 222 222</span></p>
        </div>
        <div className="contact-item">
            <p><strong>Address:</strong> <span className="contact-value">Karlovo nám. 13</span></p>
            <p><span className="contact-value">Praha 2, 120 00</span></p>
        </div>
        <div className="contact-item">
            <p><strong>Hours:</strong> <span className="contact-value">Mon–Fri · 09:00–17:00</span></p>
        </div>
    </div>
  );
};

export default ContactDetails;