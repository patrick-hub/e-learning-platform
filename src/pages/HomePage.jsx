import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import styles from './HomePage.module.css'

function HomePage() {
	return (
		<main className={styles.homepage}>
			<PageNav />
			<section>
				<p>LearnIt E-Learning Platform</p>
				<h1>
					Explore various Tech Courses. Learnit keeps track of your adventures.
				</h1>
				<h2>
					A platform that tracks your learning journey and connects you with
					well experienced teachers. Never forget your wonderful experiences,
					and show your friends how you have progressed.
				</h2>

				<Link>Start Learning Now</Link>
			</section>
		</main>
	);
}

export default HomePage;
