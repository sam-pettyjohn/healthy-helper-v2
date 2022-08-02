import React, { Component } from "react";
import { withRouter } from "react-router";
import Firebase from "../config/Firebase";
import API from "../utils/API";
import Login from "../components/LoginContainer/index";
import Images from "../components/LandingPage/index";

class Landing extends Component {
  componentWillMount() {
    this.authListener();
  }
  saveUser(user) {
    API.saveUser(user)
      .catch(err => console.log(err));
  }

  authListener() {
    Firebase.auth().onIdTokenChanged(user => {
      if (user && !Firebase.auth().currentUser.isAnonymous) {
        this.saveUser(user.email);
        this.props.history.push("/search");
      }
    });
  }

  render() {
    return (
      <>
        <Login />
        <Images />
      </>
    );
  }
}

export default withRouter(Landing);