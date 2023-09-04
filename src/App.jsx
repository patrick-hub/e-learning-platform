import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/sidebarPages/Subjects";
import Innerdashboard from "./pages/sidebarPages/Innerdashboard";
import Assignments from "./pages/sidebarPages/Assignments";
import Explore from "./pages/sidebarPages/Explore";
import Calendar from "./pages/sidebarPages/Calendar";
import Support from "./pages/sidebarPages/Support";
import "react-big-calendar/lib/css/react-big-calendar.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="product" element={<Product />} />
					<Route path="/" element={<LoginPage />} />
					<Route path="signup" element={<Signup />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="/dashboard" element={<Dashboard />}>
						<Route path="innerdashboard" element={<Innerdashboard />} />
						<Route path="subjects" element={<Subjects />} />
						<Route path="assignments" element={<Assignments />} />
						<Route path="calendar" element={<Calendar />} />
						<Route path="explore" element={<Explore />} />
						<Route path="support" element={<Support />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
