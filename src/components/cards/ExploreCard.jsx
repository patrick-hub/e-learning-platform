import { User } from "../../svg";
import Progressbar from "../ProgressBar";
import styles from "./HeroCard.module.css";
import PropTypes from "prop-types";


function ExploreCard(props) {
	return (
	
		<div className={`${styles.mainContent} ${styles.exploreCard}`}>
			<div className={styles.exploreContent}>
				<img src={props.data.img} alt="img" />

				<div className={styles.cardStats}>
					<h5>{props.data.course}</h5>
					<small>{props.data.updates && props.data.updates} {props.data.updates ? 'updates' : ""}</small>
				</div>

                <small style={{fontSize: "10px"}}>{props.data.description}</small>

				<div className={styles.usericon}>
					<img src={User} alt="" />
				<small>{props.data.teacher}</small>	
				</div>

                <div>
                    <Progressbar />
                </div>
			
			</div>
		</div>

	);
}

ExploreCard.propTypes = {
	data: PropTypes.shape({
		img: PropTypes.string.isRequired,
		course: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
		teacher: PropTypes.string.isRequired,
		updates: PropTypes.number.isRequired,
	}).isRequired,
};

export default ExploreCard;
