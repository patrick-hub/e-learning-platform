import { useFormik } from "formik";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas";




function LoginPage() {
	const userRef = useRef();
	const navigate = useNavigate()
	const { values, errors, handleChange, handleBlur, isSubmitting, touched, handleSubmit } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema: loginSchema,
			onSubmit,
		});

	console.log(errors);


async function onSubmit(values, actions) {

	actions.resetForm()
	await new Promise((resolve) => setTimeout(resolve, 1000))
	navigate("/dashboard")
	console.log("Submitted");
}

	useEffect(() => {
		userRef.current.focus();
	}, []);

	return (
		<main className={styles.login}>
			<PageNav />
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.row}>
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						id="email"
						onChange={handleChange}
						value={values.email}
						ref={userRef}
						onBlur={handleBlur}
						className={
							errors.email && touched.email ? `${styles.inputError}` : ""
						}
					/>
					{errors.email && touched.email && (
						<p className={styles.errorFeedback}>{errors.email}</p>
					)}

					{/* <img src={'/eye-invisible.svg'} alt="" /> */}
				</div>
				<div className={styles.row}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={handleChange}
						value={values.password}
						onBlur={handleBlur}
						className={
							errors.password && touched.password ? `${styles.inputError}` : ""
						}
					/>
					{errors.password && touched.password && (
						<p className={styles.errorFeedback}>{errors.password}</p>
					)}
				</div>

				<div className={styles.btn}>
					<button type="submit" disabled={isSubmitting}>Login</button>
					<small>
						Dont have an Account? <Link to="/signup">Register</Link>
					</small>
				</div>
			</form>
		</main>
	);
}

export default LoginPage;
