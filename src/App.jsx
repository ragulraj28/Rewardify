import "./App.css";
import Login from "./components/onBoarding/login/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./components/onBoarding/contact/Contact";
import Dashboard from "./components/dashboard/component/Dashboard";
import Orders from "./components/orders/Orders";
import Profile from "./components/profile/Profile";
import Products from "./components/products/Products";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
import RegisterStore from "./components/onBoarding/registerStore/RegisterStore";
import PostLoginLayout from "./components/postLoginLayout/PostLoginLayout";
import AddAProduct from "./components/products/AddAProduct/AddAProduct";
import EditProductForm from "./components/products/AddAProduct/EditProductForm";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="register-store" element={<RegisterStore />} />
          <Route
            element={
              <ProtectedRoute>
                <PostLoginLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-product" element={<AddAProduct />} />
            <Route path="edit-product" element={<EditProductForm />} />
          </Route>
          <Route path="*" element={<h1>404 page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
   
  );
};

export default App;
