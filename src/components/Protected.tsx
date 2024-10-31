import { FC, PropsWithChildren, useEffect } from "react";
import { useIsAuthenticated } from "../features/auth/authHooks";
import { useNavigate } from "react-router-dom";
import BackdropLoader from "./BackdropLoader";

const Protected: FC<PropsWithChildren> = ({ children }) => {
  const { user, isPending } = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPending && !user) {
      navigate("/login");
    }
  }, [navigate, isPending, user]);

  if (isPending) return <BackdropLoader />;

  return <>{children}</>;
};

export default Protected;
