import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { LuSettings } from "react-icons/lu";
import { BsCalendar2Minus } from "react-icons/bs";
import {BiSupport} from "react-icons/bi"

function Sidebar() {
	return (
		<main className={styles.sidebar}>
			<img src={`/public/LearnEdge.svg`} alt="learn-edge" />

			<nav className={styles.sidebarLink}>
				<ul>
					<li>
						<NavLink to="/dashboard/display/innerdashboard">
							<LuLayoutDashboard />
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/display/subjects">
							<BsBook />
							My Subjects
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/display/assignments">
			
							<MdOutlineAssignment />
							Assignments
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/display/explore">
							<TfiWorld />
							Explore
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/display/calendar">
			
							<BsCalendar2Minus />
							Calendar
						</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/display/teachers">
			
							<LuSettings />
							Settings
						</NavLink>
					</li>
				</ul>

				<div style={{ marginTop: "12rem" }}>
					<ul className={styles.sidebarLink}>
						<li>
							<NavLink to="/dashboard/display/contact">
								<BiSupport />
								Support
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/display/logout">
								<IoIosLogOut />
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
