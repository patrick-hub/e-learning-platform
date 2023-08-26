import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<section className={styles.pagenotfound}>
			<img
				src={"/404image.avif"}
				alt="404-page"
				className={styles.img}
			/>
            <div>
            <Link className="cta" to="/">
				Go to Home
			</Link>
            </div>
			
		</section>
	);
}

export default PageNotFound;
