import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { registerOperation } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const register = (userData) => {
    dispatch(registerOperation(userData));
  };
  return (
    <div>
      <RegisterForm submit={register} />
    </div>
  );
};

export default RegistrationPage;
