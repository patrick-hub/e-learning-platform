import Calendarcomp from "../../components/Calendar";
import ScheduleClass from "../../components/ScheduleClass";
import styles from "./SidebarNavs.module.css";

function Calendar() {
	return (
		<div className={styles.calComp}>
			<div>
				<ScheduleClass />
			</div>

			<Calendarcomp />
		</div>
	);
}

export default Calendar;
