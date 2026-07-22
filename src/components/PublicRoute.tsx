import { Navigate } from "react-router-dom";

type PublicRouteProps = {
  children: React.ReactNode;
};

export default function PublicRoute({
  children,
}: PublicRouteProps) {
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}