import PageNav from "../components/PageNav";
import styles from "./Login.module.css"

function LoginPage() {
	return (
		<main className={styles.login}>
			<PageNav />
			<section>
				<h1>Login</h1>
			</section>
		</main>
	);
}

export default LoginPage;
