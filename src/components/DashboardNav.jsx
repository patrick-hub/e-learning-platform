import styles from "../pages/Dashboard.module.css";
import Search from "./Search";
import { LuLayoutDashboard } from "react-icons/lu";
import { Bell } from "../svg";

function DashboardNav() {
	return (
		<nav className={styles.dashNav}>
			<div className={styles.dashIcon}>
				<LuLayoutDashboard />
				<span>Dashboard</span>
			</div>

			<div className={styles.userProfile}>
				<div>
					<Search placeholder={`Search for anything`}/>
				</div>
				<div>
					<img src={Bell} alt="bell-icon" style={{height: "20px", width:'20px'}}/>
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
