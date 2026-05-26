import "./FeaturedProdutcts.css";

const items = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "Men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    id: 2,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station",
    price: 695.0,
    category: "Jewelery",
    image:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg",
  },
  {
    id: 3,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64.0,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 4,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    category: "Women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured">
      <div className="featured-header">
        <div>
          <p className="featured-tag">Featured</p>
          <h2 className="featured-title">One thing from each shelf.</h2>
        </div>
      </div>
      <div className="featured-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product-card-body">
              <span className="product-card-category">{item.category}</span>
              <h3 className="product-card-title">{item.title}</h3>
              <div className="product-card-footer">
                <span className="product-card-price">
                  ${item.price.toFixed(2)}
                </span>
                <button type="button" className="product-card-btn">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
