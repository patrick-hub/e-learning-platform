import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import DisplayPage from "./pages/DisplayPage";
import About from "./pages/sidebarPages/About";
import Courses from "./pages/sidebarPages/Courses";
import Teachers from "./pages/sidebarPages/Teachers";
import Contactus from "./pages/sidebarPages/Contactus";
// import Courses from "./pages/sidebarPages/Courses";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" index element={<HomePage />} />
					<Route path="product" element={<Product />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<Signup />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="/dashboard" element={<Dashboard />}>
						<Route path="display" element={<DisplayPage />}>
							<Route path="about" element={<About />} />
              <Route path="courses" element={<Courses />} />
              <Route path='teachers' element={<Teachers />} />
              <Route path="contact" element={<Contactus />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
