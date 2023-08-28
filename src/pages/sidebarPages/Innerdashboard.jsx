import { useState } from "react";
import HeroCard from "../../components/HeroCard";
import styles from "./DisplayPage.module.css";
import { BsBook } from "react-icons/bs";

function Innerdashboard() {

	const [totalSubjects, setTotalSubjects] = useState(10);
  const [totalAssignments, setTotalAssignments] = useState(10);
  const [totalMaterials, setTotalMaterials] = useState(10);
  const [learningHours] = useState(12)
	return (
		<main className={styles.mainContent}>
			<section>
				<h1>Welcome back, Patrick ✋</h1>

				<p>What would you like to learn today?</p>
			</section>

			<section className={styles.herocard}>
				<HeroCard title="Total Subjects" count={totalSubjects} icon={<BsBook />} />
				<HeroCard title="Total Assignments" count={totalAssignments} icon={<BsBook />} />
				<HeroCard title="Total Materials" count={totalMaterials} icon={<BsBook />} />
				<HeroCard title="Learning Hours" count={learningHours} icon={<BsBook />} />
			</section>
		</main>
	);
}

export default Innerdashboard;
