import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { uid } from "react-uid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 20,
    alignItems: "center",
    width: "100%"
  }
}));

const ButtonGroup = ({
  className,

  buttons,
  selected = [0],
  allowMultipleSelection = false,
  onChange
}) => {
  const [selectedButtonsIndex, setSelectedButtonsIndex] = useState(selected);
  const classes = useStyles();

  const onClick = selectedIndex => {
    if (selectedButtonsIndex.includes(selectedIndex)) {
      if (selectedButtonsIndex.length > 1) {
        setSelectedButtonsIndex(
          selectedButtonsIndex.filter(
            buttonIndex => buttonIndex != selectedIndex
          )
        );
      }
    } else {
      if (allowMultipleSelection) {
        setSelectedButtonsIndex([...selectedButtonsIndex, selectedIndex]);
      } else {
        setSelectedButtonsIndex([selectedIndex]);
      }
    }
  };

  const children = buttons.map(({ label, subheading }, index) => {
    const variant = selectedButtonsIndex.includes(index)
      ? "contained"
      : "outlined";

    return (
      <div
        key={index}
        onClick={() => onClick(index)}
        role={allowMultipleSelection ? "checkbox" : "radiogroup"}
        aria-checked={selectedButtonsIndex.includes(index)}
      >
        <Button variant={variant} color="primary" disableElevation fullWidth>
          {label}
        </Button>
      </div>
    );
  });

  useEffect(() => {
    onChange && onChange(selectedButtonsIndex);
  }, [selectedButtonsIndex]);

  return (
    <div
      className={classes.root}
      role={allowMultipleSelection ? "checkbox" : "radiogroup"}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
