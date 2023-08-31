import styles from "./Herocard.module.css"
import PropTypes from 'prop-types'
function HeroCard({ title, count, icon }) {
	return (
		<main className={styles.herocard}>
			<div className={styles.cardInfo}>
				<h3>{title}</h3>
                <h2>{count}</h2>
			</div>
            <div className={styles.heroicon}>
                {icon}
            </div>
		</main>
	);
    
}

HeroCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired, 
    icon: PropTypes.node.isRequired, 
  };
  



export default HeroCard;
