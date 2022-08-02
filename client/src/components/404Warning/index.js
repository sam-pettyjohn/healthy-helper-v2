import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import "./style.css";

// material-ui imports
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: "0 !important",
    color: "white!important",
    border: "solid white 1px",
    fontSize: "18px",
    alignSelf: "center",
    marginTop: "13px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.4), 0 10px 10px rgba(0,0,0,0.37)",
    background: "indianred",
    "&:hover": {
      background: "rgb(120, 53, 53)"
    }
  },
  input: {
    display: "none"
  }
});

class NoMatch extends Component {
  returnToHome = props => {
    this.props.history.push("/");
  };

  render() {

    return (
      <div className="errorBackground">
        <div className="errorBackgroundDesign" />
        <div className="contentContainer">
          <div className="imageContainer">
            <h1 className="errorTitle">Error: 404</h1>
            <h1 className="errorText">
              Uh-oh! This page does not exist!
            </h1>
            <Button
              variant="outlined"
              className="returnHomeButton"
              onClick={this.returnToHome}
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NoMatch));