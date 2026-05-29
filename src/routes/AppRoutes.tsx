import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import { CartProvider } from "../context/CartContext";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout/Checkout";
import ProductDetail from "../pages/ProductDetail";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductDetail /> },
  { path: "/contact", element: <Contact /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "*", element: <NotFoundPage /> },
]);

const AppRoutes = () => (
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

export default AppRoutes;
