import styles from "./Herocard.module.css"
import { Timeforward } from "../../svg";
import PropTypes from "prop-types"

function RecordedClasses(props) {
	return (
	
			<main className={`${styles.card} ${styles.record}`}>
				<section className={styles.course}>
					<h3>
						{props.data.course}
					</h3>

					<small className={styles.duration}>
						{props.data.duration}
					</small>
				</section>
				<small>Simultaneous Equation</small>

                <div className={`${styles.usericon} ${styles.activity}`}>
					<img src={Timeforward} alt="" />
					<small>	{props.data.lastActivity}</small>
				</div>

			
			</main>
	);
}

RecordedClasses.propTypes = {
	data: PropTypes.shape({
		course: PropTypes.string.isRequired,
		duration: PropTypes.string.isRequired,
		topic: PropTypes.string.isRequired,
		lastActivity: PropTypes.string.isRequired,
		
	}).isRequired,
};

export default RecordedClasses;
