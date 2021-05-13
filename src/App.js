import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import StoriesComponent from "./components/StoriesComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/story/:categoryName">
            <StoriesComponent />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
