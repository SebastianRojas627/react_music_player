import { Navigate, Route, Routes } from "react-router-dom";
import { FormPage } from "../pages/FormPage";

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path="form" element={<FormPage />} />
      <Route path="/*" element={<Navigate to="/auth/form" />} />
    </Routes>
  );
};
