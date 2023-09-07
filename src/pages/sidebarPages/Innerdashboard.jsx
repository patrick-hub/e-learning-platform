import { useState } from "react";
import styles from "./DisplayPage.module.css";
import HeroCard from "../../components/cards/HeroCard";
import Calendarcomp from "../../components/Calendar";
import { dummyData, recordedClassesdata } from "../../../dummydata";
import Card from "../../components/cards/Cardcomponent";
import { Link } from "react-router-dom";
import RecordedClasses from "../../components/cards/RecordedClasses";
import { Duration, RoundbookSVG, Calendar, Notebook } from "../../svg";

function Innerdashboard() {
	const [totalSubjects] = useState(11);
	const [totalAssignments] = useState(10);
	const [totalMaterials] = useState(13);
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
					icon={
						<img
							src={RoundbookSVG}
							className={styles.icon}
							alt="roundbook-Icon"
						/>
					}
				/>

				<HeroCard
					title="Total Assignments"
					count={totalAssignments}
					icon={
						<img src={Calendar} className={styles.icon} alt="calendar-Icon" />
					}
				/>
				<HeroCard
					title="Total Materials"
					count={totalMaterials}
					icon={
						<img src={Notebook} className={styles.icon} alt="notebook-Icon" />
					}
				/>
				<HeroCard
					title="Learning Hours"
					count={learningHours}
					icon={
						<img src={Duration} className={styles.icon} alt="duration-Icon" />
					}
				/>
			</section>

			<section className={styles.calendarSection}>
				<Calendarcomp height={400} />

				<div className={styles.card}>
					<div className={styles.heading}>
						<h1>My Assignments</h1>
						<Link to="/dashboard/assignments">See All</Link>
					</div>

					{dummyData.slice(0, 3).map((data) => (
						<Card key={data.id} data={data} />
					))}
				</div>
			</section>
			<section className={styles.calendarSection}>
				<Calendarcomp height={400} />

				<div className={styles.card}>
					<div className={styles.heading}>
						<h1>Previous Class Recordings</h1>
					</div>

					{recordedClassesdata.slice(0, 4).map((data) => (
						<RecordedClasses key={data.id} data={data}/>
					)) }
				</div>
			</section>
		</main>
	);
}

export default Innerdashboard;
