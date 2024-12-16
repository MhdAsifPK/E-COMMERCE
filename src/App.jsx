// import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/Pages/HomePage";
import NoPage from "./assets/Pages/NoPage";
import ProductInfo from "./assets/Pages/ProductInfo";
import ScrollTop from "./assets/components/ScrollTop";
import CartPage from "./assets/Pages/CartPage";
import AllProduct from "./assets/Pages/AllProduct";
import Signup from "./assets/Pages/Registration/Signup";
import Login from "./assets/Pages/Registration/Login";
import UserDashboard from "./assets/Pages/UserDahboard";
import AdminDashboard from "./assets/Pages/Admin/AdminDashboard";
import AddProductPage from "./assets/Pages/Admin/AddProductPage";
import UpdateProductPage from "./assets/Pages/Admin/UpdateProductPage";
// import MyState from "./context/myState";

const App = () => {
  return (
    // <MyState>
      <Routes>
        {/* <ScrollTop /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/productinfo" element={<ProductInfo />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/updateproduct" element={<UpdateProductPage/>} />
      </Routes>
    // </MyState>
  );
};

export default App;
