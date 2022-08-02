import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Firebase from "./config/Firebase";

import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import NoMatch from "./pages/NoMatch";
import RecipePage from "./pages/RecipePages";
import HealthyHelper from "./pages/HealthyHelper";
import Manage from "./pages/ManageMeals";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isAnonymous: false
    };
  }

  componentDidMount() {
    this.authListener();
  }

  componentWillMount() {
    this.authListener();
  }

  authListener() {
    Firebase.auth().onIdTokenChanged(user => {

      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
        localStorage.setItem("isAnonymous", user.isAnonymous);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
        localStorage.removeItem("isAnonymous");
      }
    });
  }

  render() {
    return (
      <Router>
        <>
          {this.state.user || localStorage.getItem("user") ? (
            <>
              {this.state.isAnonymous ||
              !localStorage.getItem("isAnonymous") ? (
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/search" component={HealthyHelper} />
                  <Route exact path="/recipe/:id" component={RecipePage} />
                  <Route component={NoMatch} />
                </Switch>
              ) : (
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/search" component={HealthyHelper} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/recipe/:id" component={RecipePage} />
                  <Route exact path="/manage" component={Manage} />
                  <Route component={NoMatch} />
                </Switch>
              )}
            </>
          ) : (
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route component={NoMatch} />
            </Switch>
          )}
        </>
      </Router>
    );
  }
}

export default App;