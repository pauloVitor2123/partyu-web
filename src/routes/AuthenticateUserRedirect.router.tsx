import { Navigate, Outlet } from "react-router-dom";
import { TUserHttp } from "../@types/use";

export const AuthenticatedUserRedirect = () => {
  // TODO: Valid if user is already authenticated
  const user: TUserHttp = JSON.parse(
    localStorage.getItem(`Partyu_@User`) || "{}"
  );
  if (user?.idUser) {
    const path = "/dashboard";
    return <Navigate to={path} />;
  }

  return <Outlet />;
};
