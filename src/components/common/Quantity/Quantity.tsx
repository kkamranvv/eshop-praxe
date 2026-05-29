import "./Quantity.css";

interface QuantityProps {
  value: number;
  onChange: (newQty: number) => void;
}

const Quantity = ({ value, onChange }: QuantityProps) => {
  return (
    <div className="qty">
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))}>
        −
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
};

export default Quantity;
