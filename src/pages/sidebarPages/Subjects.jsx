import SubjectCard from "../../components/cards/SubjectCard";
import styles from "./DisplayPage.module.css";
import { assignmentdata } from "../../../dummydata";
import { useState } from "react";
import Select from "react-dropdown-select";
import { RoundbookSVG } from "../../svg";

function Subjects() {
	const [selectedOptions, setSelectedOptions] = useState();

	const options = [
		{ label: "Physics", value: 1 },
		{ label: "Chemistry", value: 2 },
	];

	function handleSelectionChange(data) {
		setSelectedOptions(data);
	}
	return (
		<div className={styles.subjectPage}>
			<div className={styles.dropDown}>
				<small>Sort by</small>
				<div>
					<Select
						options={options}
						value={selectedOptions}
						isSearchable={true}
						onChange={handleSelectionChange}
						placeholder="Recently Accessed"
					/>
				</div>
			</div>
			<div className={styles.totalSubjects}>
				<img src={RoundbookSVG} alt="book-icon" />
				<p>Total Subjects</p>
				<span>10</span>
			</div>

			<div className={styles.subjectcards}>
				{assignmentdata.map((item) => (
					<SubjectCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}

export default Subjects;
