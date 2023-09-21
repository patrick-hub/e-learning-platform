import styles from "./Herocard.module.css";
import PropTypes from "prop-types";
import { Calendar, Mark, RoundbookSVG, User } from "../../svg";
import Progressbar from "../ProgressBar";
import { useNavigate } from "react-router";
function Card(props) {
	const navigate = useNavigate()

	function goToAssignment(){
		navigate('/dashboard/assignmentDetails')
	}

	return (
		<main className={styles.card}>
			<section className={styles.assign}>
				<span>
					<img src={Calendar} alt="calendar" />
					Assigned : {props.data.date}
				</span>

				<small
					style={{
						backgroundColor:
							props.data.status === "done" ? "#f6fbf6" : "#fffaf2",
						color: props.data.status === "done" ? "#75c178" : "#ffa501",
						padding: "3px",
					}}>
					{props.data.status}
				</small>
			</section>
			<h3>Assignment 1{props.data.subject}</h3>
			<section className={styles.subjects}>
				<img src={RoundbookSVG} alt="book" /> <small>chemistry</small>
				<img src={User} alt="user" />
				<small>{props.data.teacher}</small>
			</section>

			<section className={styles.dateSection}>
				<small className={styles.deadline}>
					<img src={Calendar} alt="calendar" /> Deadline - {props.data.deadline}
				</small>
				<small className={styles.mark}>
					<img src={Mark} alt="mark" /> Mark - 20
				</small>
			</section>
	
				<Progressbar daysLeft={props.data.daysLeft}/>
				<small onClick={goToAssignment} style={{cursor: "pointer", color: "#004C97"}}>View more</small>
		</main>
	);
}

Card.propTypes = {
	data: PropTypes.shape({
		date: PropTypes.string.isRequired,
		subject: PropTypes.string.isRequired,
		teacher: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
		daysLeft: PropTypes.number.isRequired,
		deadline: PropTypes.string.isRequired,
	}).isRequired,
};

export default Card;
