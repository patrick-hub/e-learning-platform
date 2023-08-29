import DatePicker from "react-datepicker";
import { useState } from "react";
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
		<div>
			<h1>Calendar</h1>
			<h2>Add New Event</h2>
			<div>
				<input
					type="text"
					placeholder="Add a class schedule"
					style={{ width: "20%", marginRight: "10px" }}
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
				<button onClick={handleAddEvent}>Add Event</button>
			</div>
		</div>
	);
}

export default ScheduleClass;
