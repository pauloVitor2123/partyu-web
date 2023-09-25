import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  // const location = useLocation();
  const token = localStorage.getItem("@Partyu_Token") || "";
  // const user = JSON.parse(localStorage.getItem("#Partyu_@User") || "{}");
  // TODO: Take the token
  // TODO: Validate token in backend

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Box minH="100vh" fontFamily={"Inter"}>
      {/* <Navbar /> */}
      <Outlet />
    </Box>
  );
};
