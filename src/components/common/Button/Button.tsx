import "./Button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ text, onClick, type = "button" }: ButtonProps) => {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
