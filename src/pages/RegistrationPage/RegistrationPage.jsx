import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { registerOperation } from "../../redux/auth/operations";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const register = (userData) => {
    dispatch(registerOperation(userData));
  };
  return (
    <div className={css.regBox}>
      <h1 className={css.title}>Sign-up</h1>
      <RegisterForm submit={register} />
    </div>
  );
};

export default RegistrationPage;
