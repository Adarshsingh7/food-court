import { FC, PropsWithChildren, useEffect } from "react";
import { useIsAuthenticated } from "./authHooks";
import BackdropLoader from "../../components/BackdropLoader";
import { useNavigate } from "react-router-dom";

const ProtectRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isError, isPending } = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) navigate("/login");
  }, [navigate, isError]);

  if (isPending) return <BackdropLoader />;
  return <>{children}</>;
};

export default ProtectRoute;
