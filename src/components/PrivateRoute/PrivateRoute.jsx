import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return isLoggedIn ? Component : <Navigate to="/login" />;
};
export default PrivateRoute;
