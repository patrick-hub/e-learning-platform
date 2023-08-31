import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { Apps, RoundbookSVG , Grades, Calendar, Assignment, Settings, Logout, Explore, Support} from "../svg";

function Sidebar() {
	return (
		<main className={styles.sidebar}>
			<img src={`/public/LearnEdge.svg`} alt="learn-edge" />

			<nav className={styles.sidebarLink}>
				<ul>
					<li>
						<NavLink to="/dashboard/innerdashboard">
							<img src={Apps} alt="apps" />
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/subjects">
						<img src={RoundbookSVG} alt="apps" />
							My Subjects
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/assignments">
			
							<img src={Assignment} alt="assign" />
							<span>Assignments</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/.">
							<img src={Grades} alt="grades-icon" />
							<span>Grades</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/explore">
							<img src={Explore} alt="grades-icon" />
							Explore
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/calendar">
			
						<img src={Calendar} alt="grades-icon" />
							Calendar
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/teachers">
			
							<img src={Settings} alt="settings-icon" />
							Settings
						</NavLink>
					</li>
				</ul>

				<div style={{ marginTop: "12rem" }}>
					<ul className={styles.sidebarLink}>
						<li>
							<NavLink to="/dashboard/contact">
								<img src={Support} alt="support" />
								Support
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/logout">
								<img src={Logout} alt="logout" />
								Logout
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</main>
	);
}

export default Sidebar;
