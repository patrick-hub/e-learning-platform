import styles from "../pages/Dashboard.module.css";
import LightDarkmode from "./LightDarkmode";
import Search from "./Search";

function DashboardNav() {
	return (
		<div className={styles.dashNav}>
			<img
				src="/logo_transparent.png"
				alt="learnit logo"
				className={styles.logo}
			/>
			<Search />
            <div>
                <LightDarkmode />
            </div>
		</div>
	);
}

export default DashboardNav;
