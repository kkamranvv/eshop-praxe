import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const fetchProducts = () => api.get("/products");
export const fetchProduct = (id: string | number) => api.get(`/products/${id}`);
export const fetchCategories = () => api.get("/products/categories");
