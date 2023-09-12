import styles from "./Settings.module.css";
function Profile() {
	return (
		<main className={styles.fullProfile}>
			<section className={styles.userProfile}>
				<img
					src="/coverimage.avif"
					alt=""
					style={{ height: "50px", width: "50px", borderRadius: "50%" }}
				/>
				<div className={styles.userdetails}>
					<p>Patrick Akuagwu</p>
					<small>Student Class 2A</small>
				</div>
			</section>

			<section className={styles.furtherInfo}>
                <div className={styles.edit}>
                    <p>Personal Information</p>
                    <button className={styles.settingsBtn}>Edit</button>
                </div>
                <div className={styles.furtherDetails}>
				<div>
					<small className="text-labels font-normal leading-5 text-neutral-500">
						First name
					</small>
                    <p className="font-medium text-sm leading-5 capitalize">Patrick </p>

				</div>
                <div>
					<small className="text-labels font-normal leading-5 text-neutral-500">
						Last name
					</small>
                    <p className="font-medium text-sm leading-5 capitalize"> Akuagwu</p>

				</div>
                <div>
					<small className="text-labels font-normal leading-5 text-neutral-500">
						Email Address
					</small>
                    <p className="font-medium text-sm leading-5 capitalize">akuagwupatrick@gmail.com</p>

				</div>
                <div>
					<small className="text-labels font-normal leading-5 text-neutral-500">
						Phone number
					</small>
                    <p className="font-medium text-sm leading-5 capitalize">08132247758</p>

				</div>
                </div>
			</section>
		</main>
	);
}

export default Profile;
