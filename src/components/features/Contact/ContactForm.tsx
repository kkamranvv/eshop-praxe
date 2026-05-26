import { useState, type FormEvent } from 'react';
import './ContactForm.css'

type ContactFormProps = {
  onSuccess: (name: string) => void;
};

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validate = () => {
    const nextErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!name.trim()) {
      nextErrors.name = 'Name is required.';
    } else if (name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!message.trim()) {
      nextErrors.message = 'Message is required.';
    } else if (message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    onSuccess(name.trim());

    setName('');
    setEmail('');
    setMessage('');
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-input ${errors.name ? 'invalid' : ''}`}
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby="name-error"
        />
        {errors.name && <span className="error-text" id="name-error">{errors.name}</span>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-input ${errors.email ? 'invalid' : ''}`}
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby="email-error"
        />
        {errors.email && <span className="error-text" id="email-error">{errors.email}</span>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`form-input ${errors.message ? 'invalid' : ''}`}
          placeholder="Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-error"
        />
        {errors.message && <span className="error-text" id="message-error">{errors.message}</span>}

        <button className="submit-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;