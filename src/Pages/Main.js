import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Profile from "./Profile";

const Main = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="product" element={<Product />} />
    </Routes>
  );
};

export default Main;
