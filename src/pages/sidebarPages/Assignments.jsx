import { dummyData } from "../../../dummydata";
import Card from "../../components/cards/Cardcomponent";
import styles from "./DisplayPage.module.css";
import Select from "react-dropdown-select";
import { useState } from "react";
import Search from "../../components/Search";

function Assignments() {
	const [selectedOptions, setSelectedOptions] = useState();

    const customStyles = {
        border: "0.8px solid #999",
        color: "#333",
        marginTop: "35px",
        width: "300px"
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
			<div style={{display: "flex", gap: "20px"}}>
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
                    <Search placeholder={`Search for assignment`} customStyles={customStyles}/>
                </div>
			</div>

			<div className={styles.assignmentcard}>
				{dummyData.map((data) => (
					<Card data={data} key={data.id} />
				))}
			</div>
		</div>
	);
}

export default Assignments;
