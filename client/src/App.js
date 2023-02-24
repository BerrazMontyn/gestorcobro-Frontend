import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import Clients from "./Components/Clients/Clients.jsx";
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/clientes" component={Clients} />
          <Route exact path="/categorias" component={Categories} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
