import Calendarcomp from "../../components/Calendar";
import styles from "./DisplayPage.module.css";
import { Link } from "react-router-dom";
import { dummyData } from "../../../dummydata";
import Card from "../../components/cards/Cardcomponent";

function Calendar() {
	return (
		<div style={{ display: "flex", justifyContent: "center", gap: "20px", height: "100vh"}}>
			<Calendarcomp height={800} />
			<div className={styles.assignRecordings}>
				<div className={styles.card}>
					<div className={styles.heading}>
						<h1>My Assignments</h1>
						<Link to="/dashboard/assignments">See All</Link>
					</div>

					{dummyData.slice(0, 3).map((data) => (
						<Card key={data.id} data={data} />
					))}
				</div>
				<div className={styles.card}>
					<div className={styles.heading}>
						<h1>My Assignments</h1>
						<Link to="/dashboard/assignments">See All</Link>
					</div>

					{dummyData.slice(0, 3).map((data) => (
						<Card key={data.id} data={data} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Calendar;
