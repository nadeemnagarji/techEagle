import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { PropsWithChildren, useEffect } from "react";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      console.log("hi");
      return;
    }
    if (user === null) {
      navigate("/signup", { replace: true });
    }
  }, [navigate, user]);

  return children;
}
