import styles from "./Page.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return  <Link to='/' >
    <div className={styles.main}>
  <img src="/public/logo_transparent.png" alt="learnit logo" className={styles.logo} />
  <span>learnIt</span>
  </div>
  </Link>
}

export default Logo;
