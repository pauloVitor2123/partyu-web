import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { LandingPage } from "../pages/LandingPage";
import { AuthenticatedUserRedirect } from "./AuthenticateUserRedirect.router";
import { Login } from "../pages/Login";
import { ProtectedRoute } from "./Protected.router";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route index path="landing-page" element={<LandingPage />} />
      <Route path="" element={<AuthenticatedUserRedirect />}>
        <Route path="" element={<Login />} />
      </Route>
      <Route path="" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
