import "./App.css";
import Home from "./components/Home/Home/Home";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/*'>
            <NotFound/>
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
