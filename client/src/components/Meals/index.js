import React, { Component } from "react";
import PropTypes from 'prop-types';
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

// material-ui import
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const largeStyles = theme => ({
  root: {
    flexGrow: 1,
    direction: 'row',
    maxWidth: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    margin: 10,
    padding: 10,
  },
  demo: {
    direction:"row",
  },
  paper: {
    width: 90,
    height: 90,
    color: theme.palette.text.secondary,
    justify: 'center',
    margin: 'auto',
    alignItems: 'space-around'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  row: {
    margin:5,
    justify:'center',
    alignItems:'center',
    direction:'row'
  },

});

const tabletStyles = theme => ({
  root: {
    flexGrow: 1,
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
  },
  demo: {
    direction:"row",
  },
  paper: {
    width: 70,
    height: 70,
    color: theme.palette.text.secondary,
    margin: 5,
    justify: 'center',
    margin: 'auto',
    alignItems: 'space-around'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  row: {
    margin:5,
    justify:'center',
    alignItems:'center',
    direction:'row'
  },

});

const mobileStyles = theme => ({
  root: {
    flexGrow: 1,
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    margin: 10,
  },
  demo: {
    direction:"row",
  },
  paper: {
    width: 70,
    height: 70,
    color: theme.palette.text.secondary,
    justify: 'center',
    margin: 'auto',
    alignItems: 'space-around'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  row: {
    margin:5,
    justify:'center',
    alignItems:'center',
    direction:'row'
  },

});
  
const styleCheck = function() {

  if (window.innerWidth < 650) {
    return mobileStyles;
  } else if (window.innerWidth < 900 && window.innerWidth > 651) {
    return tabletStyles;
  } else {
    return largeStyles;
  }
};


class ManageMeals extends Component {

 state = {
    favorites: this.props.favorites,
    menu: this.props.curMenu,
    currentUser: "",
    direction: '',
    style: styleCheck(),
  };

  mapMeals() {
    let menu = this.state.menu;
    console.log(menu);
    let days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];
    let meals = ["breakfast", "lunch", "dinner"];

    if (!menu) {
      let menu = {};
      for (let i = 0; i < days.length; i++) {
        menu[days[i]] = {};
        let day = menu[days[i]];

        for (let j = 0; j < meals.length; j++) {
          day[meals[j]] = {};
          day[meals[j]].id = days[i] + "-" + meals[j];
        }
      }

      return menu;
    } else {
      for (let i = 0; i < days.length; i++) {
        let day = menu[days[i]];

        if (!day) {
          menu[days[i]] = {};
          day = menu[days[i]];
        }

        for (let j = 0; j < meals.length; j++) {
          if (!day[meals[j]]) {
            day[meals[j]] = {};
          }
          day[meals[j]].id = days[i] + "-" + meals[j];
        }
      }
    }
    return menu;
  };

  mapFavs() {
    let newFavs = [...this.state.favorites];
    newFavs.map((value, index) => {
      value.id = index + 1;
    });
    return newFavs;
  };

  directionCheck = function() {

    if (window.innerWidth < 650) {
      this.setState({
        direction:'row',
      });
    } else {
      this.setState({
        direction:'column',
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { direction } = this.state;

    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];
    const meals = ["breakfast", "lunch", "dinner"];
    const mealList = this.mapMeals();
    console.log(mealList);

    return (
        <>
        <Grid container className={classes.root}>
        {days.map( day => {
          return(
            <Grid item className={classes.row} >
              <Grid
                container
                spacing={2}
                className={classes.demo}
                direction={direction}
              >
                {meals.map(value => (
                  <Grid key={value} item spacing={8}>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )
        })}
      </Grid>

        </>
    );
  }
}

ManageMeals.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ManageMealsWrapped = withStyles(styleCheck())(ManageMeals);

export default DragDropContext(HTML5Backend)(ManageMealsWrapped);