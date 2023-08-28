import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<section>
			<img
				src={"/404image.avif"}
				alt="404-page"
				
			/>
            <div>
            <Link className="cta" to="/">
				Go to Home
			</Link>
            </div>
			
		</section>
	);
}

export default PageNotFound;
