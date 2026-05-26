import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/contact", element: <Contact /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
