import SubjectCard from "../../components/cards/SubjectCard";
import styles from "./DisplayPage.module.css";
import { assignmentdata } from "../../../dummydata";
import { Link } from "react-router-dom";
function Subjects() {
	return (
		<div className={styles.subjectPage}>
			<p>Sort by</p>
			<Link to='' className={styles.subjectcards}>
                
				{assignmentdata.map((item) => (
					<SubjectCard key={item.id} item={item} />
				))}
			</Link>
		</div>
	);
}

export default Subjects;
