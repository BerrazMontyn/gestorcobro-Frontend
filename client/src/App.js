import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import Clients from "./Components/Clients/Clients.jsx";
import Services from "./Components/Servicios/Services";
import AddService from "./Components/Servicios/AddServices/AddService";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/clientes" component={Clients} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/nuevo-servicio" component={AddService} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
