import { useState, useRef } from "react";
import { useKey } from "./Usekey";
import styles from "./Search.module.css";
import PropTypes from "prop-types";
import { SearchIcon } from "../svg";

function Search({ placeholder, customStyles }) {
	const [query, setQuery] = useState("");
	const inputEl = useRef(null);

	useKey("Enter", function () {
		if (document.activeElement === inputEl.current) return;
		inputEl.current.focus();
		setQuery("");
	});

	return (
		<div>
			<input
				className={`${styles.search} ${customStyles}`}
				type="text"
				placeholder={placeholder}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				ref={inputEl}
				style={{
					backgroundImage: `url(${SearchIcon})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "10px center",
					paddingLeft: "40px",
					...customStyles,
				}}
			/>
		</div>
	);
}

Search.propTypes = {
	placeholder: PropTypes.string,
	customStyles: PropTypes.object,
};

export default Search;
