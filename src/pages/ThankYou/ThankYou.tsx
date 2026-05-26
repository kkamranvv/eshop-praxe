import './ThankYou.css'

import './ThankYou.css'

type ThankYouProps = {
  name: string;
  onBack?: () => void;
};

const ThankYou = ({ name, onBack }: ThankYouProps) => {
  return (
    <main className="ty-root">
      <div className="ty-container">
        <div className="ty-meta">MESSAGE SENT</div>
        <h1 className="ty-title">Thanks, {name}.</h1>
        <p className="ty-desc">
          We've got your note. Expect a reply within one business day.
        </p>

        <div className="ty-actions">
          <a className="ty-button ty-button--primary" href="/">
            Back to shopping →
          </a>
          <button className="ty-button ty-button--ghost" type="button" onClick={onBack}>
            Send another
          </button>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
