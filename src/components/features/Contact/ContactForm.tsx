import './ContactForm.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactForm = () => {
  return (
    <div className="contact">
        <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5} className="form-input" placeholder="Your Message"></textarea>
            
            <button className="submit-button" type="submit">
                Send Message <ArrowForwardIcon className="arrowicon" />
            </button>
        </form>
    </div>
    
  );
};

export default ContactForm;