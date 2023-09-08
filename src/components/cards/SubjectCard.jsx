import { Timeforward, User } from "../../svg";
import styles from "./HeroCard.module.css";
import PropTypes from "prop-types";


function SubjectCard(props) {
	return (
	
		<div className={styles.mainContent}>
			<div className={styles.subcard}>
				<img src={props.item.img} alt="" />

				<div className={styles.cardStats}>
					<p>{props.item.subject}</p>
					<small>{props.item.updates && props.item.updates} {props.item.updates ? 'updates' : ""}</small>
				</div>
				<div className={styles.usericon}>
					<img src={User} alt="" />
				<small>{props.item.teacher}</small>	
				</div>
				<div className={`${styles.usericon} ${styles.activity}`}>
					<img src={Timeforward} alt="" />
					<small>	Last Updated : {props.item.lastActive}</small>
				</div>
			</div>
		</div>

	);
}

SubjectCard.propTypes = {
	item: PropTypes.shape({
		img: PropTypes.string.isRequired,
		subject: PropTypes.string.isRequired,
		lastActive: PropTypes.string.isRequired,
		teacher: PropTypes.string.isRequired,
		updates: PropTypes.number.isRequired,
	}).isRequired,
};

export default SubjectCard;
