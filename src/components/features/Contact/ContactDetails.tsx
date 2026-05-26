import './ContactDetails.css'

const ContactDetails = () => {
  return (
    <div className="contact-details">
        <div className="contact-item">
            <p><strong>Email:</strong> <div className="contact-value">shop@praxe.local</div></p>
        </div>
        <div className="contact-item">
            <p><strong>Phone:</strong> <div className="contact-value">+420 222 222 222</div></p>
        </div>
        <div className="contact-item">
            <p><strong>Address:</strong> <div className="contact-value">Karlovo nám. 13</div></p>
            <p><div className="contact-value">Praha 2, 120 00</div></p>
        </div>
        <div className="contact-item">
            <p><strong>Hours:</strong> <div className="contact-value">Mon–Fri · 09:00–17:00</div></p>
        </div>
    </div>
  );
};

export default ContactDetails;