import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import { Toaster } from "sonner";
import ChangePasswordPage from "./Pages/changePassword";
import SelectPageOption from "./Pages/SelectPageOption";

import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/changePassword" element={<ChangePasswordPage />} />
          <Route path="/option" element={<SelectPageOption/>}/>
        </Routes>
        <Toaster richColors closeButton />
      </BrowserRouter>
    </>
  );
};

export default App;
