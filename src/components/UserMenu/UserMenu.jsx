import { useDispatch, useSelector } from "react-redux";
import { logOutOperation } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOutOperation());
  };

  return (
    <div>
      <>Welcome, {name}</>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
