import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Admin } from "./pages/Admin/Admin";
import Detail from "./pages/Detail/Detail";
import { Home } from "./pages/Home/Home";
import { NewPost } from "./pages/NewPost/NewPost";

function App() {
	return (
		<>
			{/* Navbar is common between all pages so its outside of switch */}
			<Navbar />

			<main>
				{/* Main content of the page */}
				<Switch>
					<Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/new-post" component={NewPost} />
					<Route path="/search/:searchQuery" component={Home} />
          <Route path="/post/:id" component={Detail} />
				</Switch>
			</main>
		</>
	);
}

export default App;
