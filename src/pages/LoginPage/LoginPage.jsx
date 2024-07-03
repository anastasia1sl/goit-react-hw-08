import LoginForm from "../../components/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { loginOperation } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const login = (userData) => {
    dispatch(loginOperation(userData));
  };
  return (
    <div className={css.loginBox}>
      <h1 className={css.title}>Sign-in</h1>

      <LoginForm submit={login} />
    </div>
  );
};

export default LoginPage;
