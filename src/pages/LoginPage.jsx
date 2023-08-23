import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<main className={styles.login}>
			<PageNav />
			<form className={styles.form}>
				<div className={styles.row}>
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					{/* <img src={'/eye-invisible.svg'} alt="" /> */}
				</div>
				<div className={styles.row}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
		
					/>
				</div>

				<div className={styles.btn}>
					<button>Login</button>
					<small>Dont have an Account? <Link to='/login'>Register</Link></small>
				</div>
			</form>
		</main>
	);
}

export default LoginPage;
