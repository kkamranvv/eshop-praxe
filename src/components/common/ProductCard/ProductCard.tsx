import "./ProductCard.css";

const ProductCard = () => {
  const items = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
  ];

  return (
    <div className="product-card-list">
      {items.map((item) => (
        <div key={item.id} className="product-card">
          <div className="product-card-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="product-card-body">
            <span className="product-card-category">{item.category}</span>
            <h3 className="product-card-title">{item.title}</h3>
            <div className="product-card-footer">
              <span className="product-card-price">${item.price}</span>
              <button type="button" className="product-card-btn">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
