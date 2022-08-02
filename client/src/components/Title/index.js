import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

// material-ui import
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    width: "100%"
  }
});

// searchbar background and positioning
class Title extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className="searchMenuBackground">
                <Typography className="title searchbarFix">
                  {this.props.children}
                </Typography>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);