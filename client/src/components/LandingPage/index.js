import React from "react";
import PropTypes from "prop-types";

import image from "../../images/makingPasta.jpg";
import image2 from "../../images/brussels.jpg";
import image3 from "../../images/chocochip.jpg";
import image4 from "../../images/supreme.jpg";
import logoImg from "../../images/HealthyHelperLogo.png";
import "./style.css";

import Grid from "@material-ui/core/Grid";

function grid() {
  return (
    <>
      {/* LANDING HEADER */}
      <Grid className="landingHeader" item xs={12}>
        <img className="logo" alt="logo" src={logoImg} />
      </Grid>

      {/* LANDING BACKGROUND IMAGES */}
      <Grid container className="gridWrapper">
        <Grid className="gridItem" xs={3}>
          <img alt="pastaIngredients" className="gridPictures" src={image} />
        </Grid>

        <Grid className="gridItem imageLeft" xs={3}>
          <img alt="salad" src={image2} className="gridPictures" />
        </Grid>

        <Grid className="gridItem imageRight" xs={3}>
          <img alt="cookies" src={image3} className="gridPictures" />
        </Grid>

        <Grid className="gridItem" xs={3}>
          <img alt="pizza" src={image4} className="gridPictures" />
        </Grid>
      </Grid>
    </>
  );
}

grid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default grid;