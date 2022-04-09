
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Graph from "./pages/Graph";
import TakeInput from "./pages/TakeInput";

function App() {
  return (
    // <Home />
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <TakeInput />
          </Route>

        </Switch>
      </Router>


      {/* <Graph /> */}
    </>
  )

}

export default App;
