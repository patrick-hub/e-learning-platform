import styles from "../pages/Dashboard.module.css";
import Search from "./Search";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

function DashboardNav() {
	return (
		<nav className={styles.dashNav}>
			<div className={styles.dashIcon}>
				<LuLayoutDashboard />
				<span>Dashboard</span>
			</div>

			<div className={styles.userProfile}>
				<div>
					<Search />
				</div>
				<div>
					<IoIosNotificationsOutline
						style={{ height: "25px", width: "40px" }}
					/>
				</div>
				<img src={`/user.jpg`} alt="user-img" />
				<div>
					<p>Patrick Akuagwu</p>
					<span>Student</span>
				</div>
			</div>
		</nav>
	);
}

export default DashboardNav;
