import styles from "./Herocard.module.css";
import PropTypes from "prop-types";
import { CiCalendar } from "react-icons/ci";
function Card(props) {
	return (
		<main className={styles.card}>
			<section className={styles.assign}>
				<div style={{display: "flex", gap: "2px"}}>
					<CiCalendar />
					<p>Assigned : {props.data.date}</p>
				</div>

				<small>{props.data.status}</small>
			</section>

			<section className={styles.cardDetails}>
				<h4>{props.data.subject}</h4>
				<span>Teacher: {props.data.teacher}</span>
			</section>
			<small>{props.data.daysLeft} days left</small>
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
	}).isRequired,
};

export default Card;
