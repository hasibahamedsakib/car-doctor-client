import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <Spinner color="failure" size="xl" aria-label="Failure spinner example" />
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/user/login" state={{ from: location }} replace />;
};

export default PrivetRoute;
