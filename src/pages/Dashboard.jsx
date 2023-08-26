import styles from "./Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import DisplayPage from "./DisplayPage";
import DashboardNav from "../components/DashboardNav";
function Dashboard() {
	return (
		<main className={styles.dashboard}>
			<section className={styles.sidebar}>
				<Sidebar />
			</section>

			<section className={styles.page}>
				<DashboardNav />
				<DisplayPage />
			</section>
		</main>
	);
}

export default Dashboard;
