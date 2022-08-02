import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UserOptions from "./Sidebar/UserOptions";
import Firebase from "../../config/Firebase";
import API from "../../utils/API";
import Swal from "sweetalert2";
import newUserBanner from "../../images/olives.jpg";
import "./style.css";
import "../LoginContainer/style.css";

// material-ui imports
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import RecipeSearchIcon from "@material-ui/icons/ImageSearch";
import DashboardIcon from "@material-ui/icons/TableChart";
import QuickPlannerIcon from "@material-ui/icons/Dashboard";
import SignUpIcon from "@material-ui/icons/PersonAdd";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },

  button: {
    margin: theme.spacing.unit
  },

  margin: {
    margin: theme.spacing.unit
  },

  cssLabel: {
    "&$cssFocused": {
      color: blue[500]
    }
  },

  cssFocused: {},

  cssUnderline: {
    "&:after": {
      borderBottomColor: blue[500]
    }
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: blue[500]
    }
  },

  notchedOutline: {},

  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },

  bootstrapInput: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },

  bootstrapFormLabel: {
    fontSize: 18
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },

  menu: {
    width: 200
  },

  signUp: {
    backgroundColor: "#7ac57b",
    "&:hover": {
      backgroundColor: "rgb(102, 177, 103)"
    }
  } 
});

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: { useNextVariants: true }
});

const dietTypes = [
  {
    value: "balanced",
    label: "Balanced"
  },

  {
    value: "low-carb",
    label: "Low Carb"
  },

  {
    value: "low-fat",
    label: "Low Fat"
  },

  {
    value: "high-protein",
    label: "High Protein"
  }
];

class ButtonAppBar extends Component {
  state = {
    email: "",
    password: "",
    openSignUp: false,
    showPassword: false,
    dietType: "balanced",
    vegan: false,
    vegetarian: false,
    sugar_conscious: false,
    peanut_free: false,
    tree_nut_free: false,
    alcohol_free: false,
    kosher: false,
    signUpError: "We will never share your email with anyone else.",
    open: false,
    isAnonymous: false,
    promptUser: false
  };

  componentWillMount() {
    this.authListener();
  }

  authListener() {
    Firebase.auth().onIdTokenChanged(user => {
      this.setState({ isAnonymous: user.isAnonymous }, () => {
        if (this.state.isAnonymous && !sessionStorage.getItem("userAlerted")) {
          sessionStorage.setItem("userAlerted", true);
          Swal.fire({
            html:
              "<ul> Becoming a user provides several benefits that include:" +
              "<br><hr><li>Ability to add recipes to your favorites list</li><br><li>A weekly meal planner to assign recipes to breakfast, lunch, and dinner</li><br>" +
              "<li>The ability to send automated grocery lists to your phone!</li></ul>",
            width: 600,
            padding: "3em",
            background: "url(" + newUserBanner + ")",
            backdrop: "rgb(0,0,0,.6)",
            confirmButtonText: "I UNDERSTAND",
            customClass: {
              container: "guestPitch",
              content: "guestCont",
              title: "guestTitle",
              confirmButton: "guestConfirmation",
              header: "guestHeader"
            }
          });
        }
      });
    });
  }

  loginInfo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDietType = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleDietRestrictions = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  revealPass = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  newUserSignUp = e => {
    e.preventDefault();

    Firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        const values = {
          preferences: {
            vegan: this.state.vegan,
            vegetarian: this.state.vegetarian,
            sugar_conscious: this.state.sugar_conscious,
            peanut_free: this.state.peanut_free,
            tree_nut_free: this.state.tree_nut_free,
            alcohol_free: this.state.alcohol_free,
            kosher: this.state.kosher,
            dietType: this.state.dietType
          }
        };

        console.log("Sign Up Preferences: ", values);

        API.postUserPreferences(values)
          .then(response => this.props.triggerPrefUpdate())
          .catch(err => console.log(err));

        this.closeSignUpTab();
      })
      .catch(error => {
        this.setState({ signUpError: error.message });
      });
  };

  openSignUpTab = () => {
    this.setState({ openSignUp: true });
  };

  closeSignUpTab = () => {
    this.setState({ openSignUp: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" className="navbarBackground">
          <Toolbar className="navbarFlex">
            <Tabs
              className="navbarText"
              variant="scrollable"
              indicatorColor="primary"
              textColor="primary"
            >
              {this.state.isAnonymous ? (
                <>
                  <Link to={"/search"} className="navbarText navbarSearch">
                    <Tab
                      label="Healthy Helper"
                      icon={<RecipeSearchIcon className="navbarCons" />}
                    />
                  </Link>
                  <Link
                    className="navbarText navbarDashboard"
                    onClick={this.openSignUpTab}
                  >
                    <Tab
                      label="Sign Up"
                      icon={<SignUpIcon className="navbarCons" />}
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/search"} className="navbarText navbarSearch">
                    <Tab
                      label="Healthy Helper"
                      icon={<RecipeSearchIcon className="navbarCons" />}
                    />
                  </Link>
                  <Link to={"/manage"} className="navbarText navbarDashboard">
                    <Tab
                      label="Quickplanner"
                      icon={<QuickPlannerIcon className="navbarCons" />}
                    />
                  </Link>
                  <Link to={"/dashboard"} className="navbarText navbarDashboard">
                    <Tab
                      label="Dashboard"
                      icon={<DashboardIcon className="navbarCons" />}
                    />
                  </Link>
                  

                  <UserOptions
                    navbarText="navbarText"
                    navButton="navButton"
                    navcon="navbarCons"
                    sidebarLoginButtons="sidebarLoginButtons"
                    sidebarLoginText="sidebarLoginText"
                    sidebarSaveButton="sidebarSaveButton"
                    sidebarSavePlacement="sidebarSavePlacement"
                    triggerPrefUpdate={this.props.triggerPrefUpdate}
                  />
                </>
              )}
            </Tabs>
          </Toolbar>
        </AppBar>

        <Dialog open={this.state.openSignUp} onClose={this.closeSignUpTab}>
          <FormControl className="signUpPrompt">
            <TextField
              onChange={this.loginInfo}
              className={this.props.classes.margin}
              InputLabelProps={{
                classes: {
                  root: this.props.classes.cssLabel,
                  focused: this.props.classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  root: this.props.classes.cssOutlinedInput,
                  focused: this.props.classes.cssFocused,
                  notchedOutline: this.props.classes.notchedOutline
                }
              }}
              label="Email"
              type="email"
              name="email"
              value={this.state.email}
              autoComplete="email"
              helperText={this.state.signUpError}
              variant="outlined"
              id="custom-css-outlined-input"
            />

            <MuiThemeProvider theme={theme}>
              <TextField
                onChange={this.loginInfo}
                className={this.props.classes.margin}
                label="Password"
                type={this.state.showPassword ? "text" : "password"}
                name="password"
                value={this.state.password}
                autoComplete="password"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.revealPass}
                      >
                        {this.state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </MuiThemeProvider>
            <TextField
              id="filled-select-dietType"
              select
              label="Select"
              className={classes.textField}
              name="dietType"
              value={this.state.dietType}
              onChange={this.handleDietType("dietType")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="What is your favorite diet plan?"
              margin="normal"
              variant="outlined"
            >
              {dietTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormLabel component="legend" className="formLabelText">
              Any Diet Restrictions?
            </FormLabel>
            <FormGroup className="formatPreferences">
              <Grid container spacing={24}>
                <Grid item sm={6} className="restrictionFlex restrictionOpt1">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.vegan}
                        onChange={this.handleDietRestrictions("vegan")}
                        value="vegan"
                      />
                    }
                    label="Vegan"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.vegetarian}
                        onChange={this.handleDietRestrictions("vegetarian")}
                        value="vegetarian"
                      />
                    }
                    label="Vegetarian"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.sugar_conscious}
                        onChange={this.handleDietRestrictions("sugar_conscious")}
                        value="sugar-conscious"
                      />
                    }
                    label="Sugar-conscious"
                  />
                </Grid>
                <Grid item sm={6} className="restrictionFlex restrictionOpt2">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.peanut_free}
                        onChange={this.handleDietRestrictions("peanut_free")}
                        value="peanut-free"
                      />
                    }
                    label="Peanut-free"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.tree_nut_free}
                        onChange={this.handleDietRestrictions("tree_nut_free")}
                        value="tree-nut-free"
                      />
                    }
                    label="Tree Nut-free"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.alcohol_free}
                        onChange={this.handleDietRestrictions("alcohol_free")}
                        value="alcohol-free"
                      />
                    }
                    label="Alcohol-free"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.kosher}
                        onChange={this.handleDietRestrictions("kosher")}
                        value="kosher"
                      />
                    }
                    label="Kosher"
                  />
                </Grid>
              </Grid>
            </FormGroup>
            <FormHelperText className="FormHelperText">
              Please select all that apply:
            </FormHelperText>
            <Button
              onClick={this.newUserSignUp}
              variant="contained"
              color="secondary"
              className={[
                this.props.classes.button,
                this.props.classes.signUp
              ].join(" ")}
            >
              Sign Up
            </Button>
          </FormControl>
        </Dialog>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ButtonAppBar));