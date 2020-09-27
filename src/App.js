import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

//pages
import Registration from "./Pages/registration/Registration";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Registration />
			</BrowserRouter>
		</div>
	);
}

export default App;
