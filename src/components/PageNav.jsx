import { NavLink } from 'react-router-dom';
 import styles from './Page.module.css'
function PageNav() {
	return (
		<nav className={styles.nav}>
			<h2>Learnit Platform</h2>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/product'>Product</NavLink>
				</li>
				<li>
					<NavLink to='/login'>Login</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PageNav;
