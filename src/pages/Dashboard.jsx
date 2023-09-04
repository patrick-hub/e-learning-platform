import styles from "./Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import DashboardNav from "../components/DashboardNav";
function Dashboard() {
	return (
		<main className={styles.dashboard}>
			<section className={styles.sidebar}>
				<Sidebar />
			</section>

			<section className={styles.page}>
				<DashboardNav />
				<div className={styles.outlet}>
					<Outlet />
				</div>
			</section>
		</main>
	);
}

export default Dashboard;
