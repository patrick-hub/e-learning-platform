import DatePicker from "react-datepicker";
import { useState } from "react";
import styles from "./Search.module.css"
import Button from "./Button";
import "react-datepicker/dist/react-datepicker.css";

function ScheduleClass() {
	const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
	const [allEvents, setAllEvents] = useState([]);

	function handleAddEvent() {
		const eventToAdd = { ...newEvent };
		setAllEvents([...allEvents, eventToAdd]);
		setNewEvent({ title: "", start: "", end: "" });
	}
	return (
		<div className={styles.schedule}>
			<h1>Calendar</h1>
			<h2>Add New Class Schedule</h2>
			<div className={styles.input}>
				<input
					type="text"
					placeholder="Add a schedule"
					value={newEvent.title}
					onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
				/>
				<DatePicker
					placeholderText="Start Date"
					selected={newEvent.start}
					onChange={(start) => setNewEvent({ ...newEvent, start })}
				/>
				<DatePicker
					placeholderText="End Date"
					selected={newEvent.end}
					onChange={(end) => setNewEvent({ ...newEvent, end })}
				/>
				<Button onClick={handleAddEvent} type="primary">Add Event</Button>
			</div>
		</div>
	);
}

export default ScheduleClass;
