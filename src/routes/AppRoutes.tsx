import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import { CartProvider } from "../context/CartContext";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/contact", element: <Contact /> },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

const AppRoutes = () => (
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

export default AppRoutes;
