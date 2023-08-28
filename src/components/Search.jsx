import { useState, useRef } from "react";
import { useKey } from "./Usekey";
import styles from "./Search.module.css"

function Search() {
    const [query, setQuery] = useState("")
	const inputEl = useRef(null);
	useKey("Enter", function () {
		if (document.activeElement === inputEl.current) return;
		inputEl.current.focus();
		setQuery("");
	});

	return (
		<input
			className={styles.search}
			type="text"
			placeholder="Search for anything"
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			ref={inputEl}
		/>
	);
}

export default Search