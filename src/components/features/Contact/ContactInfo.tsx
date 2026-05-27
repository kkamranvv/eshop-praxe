import "./ContactInfo.css";
import ContactDetails from "./ContactDetails";
import ContactPromise from "./ContactPromise";
import PageHeader from "../../common/PageHeader/PageHeader";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <PageHeader
        tag="CONTACT"
        title="Drop us a line."
        description="Questions about an order, a product, or the shop itself - we read everything"
      />
      <ContactDetails />
      <ContactPromise />
    </div>
  );
};

export default ContactInfo;
