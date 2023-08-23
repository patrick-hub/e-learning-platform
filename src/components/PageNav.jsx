import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Page.module.css";
import Logo from "./Logo";
import { useState } from "react";
function PageNav() {
	const [showLinks, setShowLinks] = useState(false);

	function toggleLinks() {
		setShowLinks(!showLinks);
	}
	return (
		<nav className={styles.nav}>
			<Logo />
			<div>
				<button onClick={toggleLinks}>
					{<GiHamburgerMenu className={styles.ham} />}
				</button>

				<ul className={`${styles.navlinks} ${showLinks ? styles.show : ""}`}>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/product">Product</NavLink>
					</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default PageNav;
