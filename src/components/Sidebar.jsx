import styles from "./Sidebar.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import {AiFillHome} from "react-icons/ai"
import {FaChalkboardTeacher} from "react-icons/fa"
import {BsHeadset} from "react-icons/bs"
import {GiGraduateCap} from "react-icons/gi"
import {BsFillQuestionCircleFill} from "react-icons/bs"

function Sidebar() {
	return (
		<main className={styles.sidebar}>
			<div className={styles.userProfile}>
				<img src={`/user.jpg`} alt="user-img" />
				<span>Welcome, XXX</span>
				<Button type="primary">View Profile</Button>
			</div>

			<nav className={styles.sidebarLink}>
				<ul>
					<li>
                        <AiFillHome />
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
                        <BsFillQuestionCircleFill />
						<NavLink to="/dashboard/display/about">About</NavLink>
					</li>
                    <li>
                        <GiGraduateCap />
						<NavLink to="/dashboard/display/courses">Courses</NavLink>
					</li>
                    <li>
                        <FaChalkboardTeacher />
						<NavLink to="/dashboard/display/teachers">Teachers</NavLink>
					</li>
                    <li>
                        <BsHeadset/>
						<NavLink to="/dashboard/display/contact">Contact Us</NavLink>
					</li>
				</ul>
			</nav>
		</main>
	);
}

export default Sidebar;
