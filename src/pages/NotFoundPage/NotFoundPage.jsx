import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={css.relocateBox}>
      <p className={css.error}>Oops, this page does not exist</p>
      <Link to="/" className={css.homeBtn}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
