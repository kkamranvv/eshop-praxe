import { useState } from 'react';
import './Contact.css'
import ContactForm from '../../components/features/Contact/ContactForm';
import ContactInfo from '../../components/features/Contact/ContactInfo';
import ThankYou from '../ThankYou/ThankYou';

const Contact = () => {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  if (submittedName) {
    return <ThankYou name={submittedName} onBack={() => setSubmittedName(null)} />;
  }

  return (
    <div className="contact-page">
      <ContactInfo />
      <ContactForm onSuccess={setSubmittedName} />
    </div>
  );
};

export default Contact;