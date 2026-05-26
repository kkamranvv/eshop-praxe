import './Contact.css'
import ContactForm from '../../components/features/Contact/ContactForm';
import ContactInfo from '../../components/features/Contact/ContactInfo';

const Contact = () => {
  return (
    <div className="contact-page">
        <ContactInfo />
        <ContactForm />
    </div>
  );
};

export default Contact;