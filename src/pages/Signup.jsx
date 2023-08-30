import { useFormik } from "formik";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { signupSchema } from "../schemas";

async function onSubmit(values, actions) {
	console.log("Submitted");
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
}

function Signup() {
	const {
		values,
		errors,
		handleChange,
		handleBlur,
		isSubmitting,
		touched,
		handleSubmit,
	} = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: signupSchema,
		onSubmit,
	});

	return (
		<main className={styles.login}>
			<div className={styles.image}>
				<img src={`/Rectangle 10.svg`} alt="login-img" />
			</div>
			<form
				className={`${styles.form} ${styles.signup}`}
				onSubmit={handleSubmit}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
						gap: "30px",
					}}>
					<img src={"/LearnEdge.svg"} alt="learnedge-logo" />
					<h2>Welcome back</h2>
				</div>
				<div className={styles.row}>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.firstName}
						className={
							errors.firstName && touched.firstName
								? `${styles.inputError}`
								: ""
						}
					/>

					{errors.firstName && touched.firstName && (
						<p className={styles.errorFeedback}>{errors.firstName}</p>
					)}
				</div>
				<div className={styles.row}>
					<label htmlFor="lastNname">Last Name</label>
					<input
						type="text"
						id="lastName"
						onChange={handleChange}
						value={values.lastName}
						className={
							errors.lastName && touched.lastName ? `${styles.inputError}` : ""
						}
					/>
					{errors.lastName && touched.lastName && (
						<p className={styles.errorFeedback}>{errors.lastName}</p>
					)}
				</div>
				<div className={styles.row}>
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						id="email"
						onChange={handleChange}
						value={values.email}
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
						className={
							errors.password && touched.password ? `${styles.inputError}` : ""
						}
					/>
					{errors.password && touched.password && (
						<p className={styles.errorFeedback}>{errors.password}</p>
					)}
				</div>
				<div className={styles.row}>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						id="confirmPassword"
						onChange={handleChange}
						value={values.confirmPassword}
						className={
							errors.confirmPassword && touched.email
								? `${styles.inputError}`
								: ""
						}
					/>
					{errors.confirmPassword && touched.confirmPassword && (
						<p className={styles.errorFeedback}>{errors.confirmPassword}</p>
					)}
					<small>
						Already have an Account? <Link to="/">Login</Link>
					</small>
				</div>

				<div className={styles.btn}>
					<button disabled={isSubmitting} type="submit">
						Sign In
					</button>
				</div>
			</form>
		</main>
	);
}

export default Signup;
