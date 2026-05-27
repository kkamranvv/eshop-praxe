import "./Benefit.css";

const benefitItems = [
  {
    id: 1,
    number: "01",
    title: "Curated, not crowded",
    description:
      "Twenty items at a time. We restock when something runs out, not when the marketing calendar says so",
  },
  {
    id: 2,
    number: "02",
    title: "Honest pricing",
    description:
      "One price. No flash sales, no urgency timers. The number you see is the number you pay",
  },
  {
    id: 3,
    number: "03",
    title: "Ships from Prague",
    description:
      "Within the EU in 48 hours, paper packaging, prepaid returns for the first thirty days",
  },
];

const Benefit = () => {
  return (
    <>
      {benefitItems.map((item) => (
        <div key={item.id} className="benefit-item">
          <span className="benefit-number">{item.number}</span>
          <h2 className="benefit-title">{item.title}</h2>
          <p className="benefit-description">{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Benefit;
