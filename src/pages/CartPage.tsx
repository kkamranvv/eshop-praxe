import React from "react";
import Cart from "../components/common/Header/Cart/Cart";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import PageHeader from "../components/common/PageHeader/PageHeader";

const CartPage = () => {
  return (
    <div>
      <Header />
      <PageHeader
        tag="CART"
        title="Your basket."
        description="review and adjust before checkout"
      />
      <Footer />
    </div>
  );
};

export default CartPage;
