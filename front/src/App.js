import './App.css';
import Main from './component/main';
import Header from './component/header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DrinkData from './component/DrinkData';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/DrinkData">
            <DrinkData />
          </Route>

        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
