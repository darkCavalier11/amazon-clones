import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    // run only once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>> ", authUser);
      if (authUser) {
        // the user logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Works like a switch case*/}
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
