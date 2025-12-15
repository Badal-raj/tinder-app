import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginRegistrationPage } from "../pages/loginRegpage";

export const PageRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegistrationPage />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
