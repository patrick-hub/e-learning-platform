import { dummyData } from "../../../../dummydata";
import Card from "../../../components/cards/Cardcomponent";
import styles from "../DisplayPage.module.css";
import Select from "react-dropdown-select";
import { useState } from "react";
import Search from "../../../components/Search";
import { RoundbookSVG } from "../../../svg";
import { useNavigate } from "react-router";

function Assignments() {
	const [selectedOptions, setSelectedOptions] = useState();

	const navigate = useNavigate()
	
	function goTopage(){
		navigate('/dashboard/assignmentDetails')
	}

	const customStyles = {
		border: "0.8px solid #999",
		color: "#333",
		marginTop: "35px",
		width: "100%",
	};

	const options = [
		{ label: "Physics", value: 1 },
		{ label: "Chemistry", value: 2 },
	];

	function handleSelectionChange(data) {
		setSelectedOptions(data);
	}
	return (
		<div className={styles.assignment}>
			<div className={styles.assignmentDropdown}>
				<div className={styles.dropDown}>
					<p>Sort by</p>
					<Select
						options={options}
						value={selectedOptions}
						isSearchable={true}
						onChange={handleSelectionChange}
						placeholder="Recently Accessed"
					/>
				</div>

				<div className={styles.dropDown}>
					<p>Filter by</p>
					<Select
						options={options}
						value={selectedOptions}
						isSearchable={true}
						onChange={handleSelectionChange}
						placeholder="Chemistry"
					/>
				</div>
				<div>
					<Search
						placeholder={`Search for assignment`}
						customStyles={customStyles}
					/>
				</div>
			</div>
			<div className={styles.totalSubjects}>
				<img src={RoundbookSVG} alt="book-icon" />
				<p>Total Assignments</p>
				<span>12</span>
			</div>

			<div className={styles.assignmentcard}>
				{dummyData.map((data) => (
					<Card data={data} key={data.id} />
				))}
				<button onClick={() => goTopage()}>Go to Assignment</button>
			</div>
			
		</div>
	);
}

export default Assignments;
