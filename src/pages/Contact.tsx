import { useState } from "react";
import ContactForm from "../components/features/Contact/ContactForm";
import ContactInfo from "../components/features/Contact/ContactInfo";
import ThankYou from "./ThankYou/ThankYou";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

const Contact = () => {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  if (submittedName) {
    return (
      <ThankYou name={submittedName} onBack={() => setSubmittedName(null)} />
    );
  }

  return (
    <div className="contact-page">
      <Header />
      <ContactInfo />
      <ContactForm onSuccess={setSubmittedName} />
      <Footer />
    </div>
  );
};

export default Contact;
