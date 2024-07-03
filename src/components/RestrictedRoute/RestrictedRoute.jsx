import { Navigate } from "react-router-dom";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default RestrictedRoute;
