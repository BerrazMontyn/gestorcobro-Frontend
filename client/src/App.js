import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/Landing.jsx';
import Clients from './Components/Clients/Clients.jsx';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/clientes" component={Clients} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
