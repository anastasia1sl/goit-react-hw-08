import { useDispatch, useSelector } from "react-redux";
import { logOutOperation } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOutOperation());
  };

  return (
    <div className={css.userBox}>
      <p>Welcome, {name}!</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
