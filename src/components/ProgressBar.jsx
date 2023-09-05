import { useState, useEffect } from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Progressbar(props) {
	const [filled, setFilled] = useState(50);
	const [isRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled((prev) => (prev += 2)), 50);
		}
	}, [filled, isRunning]);
	return (
		<div>
			<div className={styles.progressbar}>
				<div
					style={{
						height: "100%",
						width: `${filled}%`,
						backgroundColor: "#004c97",
						transition: "width 0.5s",
					}}></div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					fontSize: "12px",
				}}
				className={styles.progressPercent}>
				<span>{filled}%</span>
				<span>{props.daysLeft} days left</span>
			</div>
		</div>
	);
}

Progressbar.propTypes = {
	daysLeft: PropTypes.number,
};
