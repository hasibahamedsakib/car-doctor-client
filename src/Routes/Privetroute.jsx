import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Spinner color="failure" size="xl" aria-label="Failure spinner example" />
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/user/login" replace />;
};

export default PrivetRoute;
