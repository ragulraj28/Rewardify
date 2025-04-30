import "./App.css";
import Login from "./components/onBoarding/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Contact from "./components/onBoarding/contact/Contact";
import Dashboard from "./components/dashboard/component/Dashboard";
import Profile from "./components/profile/Profile";
import Products from "./components/products/Products";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
import RegisterStore from "./components/onBoarding/registerStore/RegisterStore";
import PostLoginLayout from "./components/postLoginLayout/PostLoginLayout";
import AddAProduct from "./components/products/AddAProduct/AddAProduct";
import EditProductForm from "./components/products/AddAProduct/EditProductForm";
import { ConfirmationPage } from './components/orders/ConfirmationPage';
import { PreparingPage } from './components/orders/PreparingPage';
import { PackedPage } from './components/orders/PackedPage';
import { CompletedPage } from './components/orders/CompletedPage';
import OrdersContainer from './components/orders/OrdersContainer';


const App = () => {

  return (
    <Provider store={store}>
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
            {/* DASHBOARD */}
            <Route path="dashboard" element={<Dashboard />}>
              {/* Default redirect to confirmation */}
              <Route index element={<Navigate to="confirmation" replace />} />

              {/* Orders inside dashboard */}
              <Route path="confirmation" element={<ConfirmationPage />} />
              <Route path="preparing" element={<PreparingPage />} />
              <Route path="packed" element={<PackedPage />} />
              <Route path="completed" element={<CompletedPage />} />
            </Route>

            {/* SEPARATE ORDERS PAGE */}
            <Route path="orders" element={<OrdersContainer />}>
              <Route index element={<Navigate to="confirmation" replace />} />
              <Route path="confirmation" element={<ConfirmationPage />} />
              <Route path="preparing" element={<PreparingPage />} />
              <Route path="packed" element={<PackedPage />} />
              <Route path="completed" element={<CompletedPage />} />
            </Route>

            <Route path="products" element={<Products />} />
            <Route path="add-product" element={<AddAProduct />} />
            <Route path="edit-product" element={<EditProductForm />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
