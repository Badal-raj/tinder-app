import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { LoginRegistrationPage } from "../pages/loginRegpage";
import { Header } from "../components/header";
import {Footer} from "../components/footer"

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Child routes render here */}
      <Footer />
    </>
  );
};

export const PageRoutes = () => {
  return (
    <>

      <Routes>
      <Route element={<RouteLayout />}>
        {/* Header visible here */}
        <Route path="/" element={<LoginRegistrationPage />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-product" element={<AddProduct />} /> */}
      </Route>
    </Routes>


      {/* <Header /> 
      <Routes>
        <Route path="/" element={<LoginRegistrationPage />} />
      </Routes> */}
    </>
  );
};
