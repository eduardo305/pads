import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import WifiIcon from "@material-ui/icons/Wifi";
import BluetoothIcon from "@material-ui/icons/Bluetooth";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    gridGap: 10,
    backgroundColor: "#f8f9fd",

    "& li": {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  listTitle: {
    gridColumn: "1/ span 2",
    paddingLeft: 0,
    paddingRight: 0
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  },
  scrollable: {
    overflow: "scroll",
    maxWidth: "300px"
  },
  horizontal: {
    display: "flex",
    "& li": {
      marginRight: 10
    }
  },
  noPadding: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));

const PrettoSlider = withStyles({
  root: {
    color: "#556cd6",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default function SwitchListSecondary() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ul>
      <li>
        <List
          subheader={
            <ListSubheader className={classes.listTitle}>
              Property Type
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem className={classes.listItem}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
            >
              Apartment
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outlined" color="primary" fullWidth>
              House
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outlined" color="primary" fullWidth>
              Townhouse
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outlined" color="primary" fullWidth>
              Studio
            </Button>
          </ListItem>
        </List>
      </li>
      <li>
        <List
          subheader={
            <ListSubheader className={classes.listTitle}>Price</ListSubheader>
          }
        >
          <ListItem className={classes.listItem}>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={1000}
              max={20000}
            />
          </ListItem>
        </List>
      </li>
      <li>
        <List
          className={classes.scrollable}
          subheader={
            <ListSubheader className={classes.listTitle}>
              Bedrooms
            </ListSubheader>
          }
        >
          <ListItem className={classes.listItem}>
            <ul className={`${classes.horizontal} ${classes.scrollable}`}>
              <li>
                <Button variant="outlined" color="primary">
                  Studio
                </Button>
              </li>
              <li>
                <Button variant="outlined" color="primary">
                  1
                </Button>
              </li>
              <li>
                <Button variant="contained" color="primary" disableElevation>
                  2
                </Button>
              </li>
              <li>
                <Button variant="outlined" color="primary">
                  3
                </Button>
              </li>
              <li>
                <Button variant="outlined" color="primary">
                  4+
                </Button>
              </li>
            </ul>
          </ListItem>
        </List>
      </li>

      <li>
        <List
          subheader={
            <ListSubheader className={classes.listTitle}>
              Property Size (sqft)
            </ListSubheader>
          }
        >
          <ListItem className={classes.listItem}>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={700}
              max={8000}
            />
          </ListItem>
        </List>
      </li>

      <li>
        <List
          subheader={
            <ListSubheader className={classes.listTitle}>
              Furnishing
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem>
            <Button variant="outlined" color="primary" fullWidth>
              Furnished
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
            >
              Unfurnished
            </Button>
          </ListItem>
        </List>
      </li>

      <li>
        <List
          subheader={
            <ListSubheader className={classes.listTitle}>
              Amenities
            </ListSubheader>
          }
        >
          <ListItem>
            <ListItemText primary={`Elevator`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                // checked={checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Pool`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                // checked={checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Gym`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                // checked={checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Clubhouse`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                // checked={checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </li>
    </ul>
  );
}
