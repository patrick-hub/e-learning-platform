import { useState } from "react";
import HeroCard from "../../components/cardComponents/HeroCard";
import styles from "./DisplayPage.module.css";
import { BsBook } from "react-icons/bs";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import Calendarcomp from "../../components/Calendar";
import dummyData from "../../../dummydata";
import Card from "../../components/cardComponents/Cardcomponent";
import { Link } from "react-router-dom";

function Innerdashboard() {
	const [totalSubjects] = useState(10);
	const [totalAssignments] = useState(10);
	const [totalMaterials] = useState(10);
	const [learningHours] = useState(12);
	return (
		<main className={styles.mainContent}>
			<section>
				<h1>Welcome back, Patrick ✋</h1>

				<p>What would you like to learn today?</p>
			</section>

			<section className={styles.herocard}>
				<HeroCard
					title="Total Subjects"
					count={totalSubjects}
					icon={<BsBook />}
				/>
				<HeroCard
					title="Total Assignments"
					count={totalAssignments}
					icon={<MdAssignmentTurnedIn />}
				/>
				<HeroCard
					title="Total Materials"
					count={totalMaterials}
					icon={<MdOutlineLibraryBooks />}
				/>
				<HeroCard
					title="Learning Hours"
					count={learningHours}
					icon={<CiTimer />}
				/>
			</section>

			<section className={styles.calendarSection}>
				<Calendarcomp />

				<div className={styles.card}>
					<div className={styles.heading}>
						<h1>My Assignments</h1>
						<Link to="/dashboard/display/assignments">See All</Link>
					</div>

					{dummyData.map((data) => (
						<Card key={data.id} data={data} />
					))}
				</div>
			</section>
		</main>
	);
}

export default Innerdashboard;
