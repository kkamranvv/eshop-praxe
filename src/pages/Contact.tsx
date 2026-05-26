import ContactForm from "../components/features/Contact/ContactForm";
import ContactInfo from "../components/features/Contact/ContactInfo";
import Header from "../components/common/Header/Header";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
