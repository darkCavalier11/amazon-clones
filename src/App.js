import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HuiTEF9hRq4WaYb4zQTGIkkn5EWe23kljeyVsoA9k4QZZVe8AmtYybv4Rzzl6gHjOaAbYlDWYa1WYSTjMtH7PTG00kmAUCKur"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // run only once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>> ", authUser);
      if (authUser) {
        // the user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
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
          <Route path="/orders">
            <Header></Header>
            <Orders></Orders>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
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
