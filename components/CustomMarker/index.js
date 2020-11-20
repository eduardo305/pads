import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    cursor: "pointer"
  },
  price: {
    backgroundColor: theme.palette.secondary.dark,
    padding: "3px 10px",
    borderRadius: 3,
    color: theme.palette.secondary.contrastText,
    boxShadow: "1px 1px 7px #888888",
    fontSize: 14,
    fontWeight: 600,
    transition: "padding 300ms ease",
    textAlign: "center"
  },
  currencySymbol: {
    fontSize: 12,
    fontWeight: 400
  },
  arrow: {
    width: 10,
    height: 10,
    backgroundColor: theme.palette.secondary.dark,
    transform: "translateY(-5px) rotate(45deg)",
    borderRight: "1px solid #ccc",
    borderBottom: "1px solid #ccc"
  }
}));

// Color for selected pad: #fd6634

const CustomMarker = ({ price }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.price}>
        <span className={classes.currencySymbol}>U$ </span>
        {`${price}`}
      </div>

      <div className={classes.arrow}></div>
    </div>
  );
};

CustomMarker.propTypes = {
  price: PropTypes.number.isRequired
};

export default CustomMarker;
