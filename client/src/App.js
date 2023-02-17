import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/Landing.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/home" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
