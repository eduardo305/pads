import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuOutlined from "@material-ui/icons/MenuOutlined";
import Fab from "@material-ui/core/Fab";
import FilterListOutlined from "@material-ui/icons/FilterListOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";

import Filters from "../Filters";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: "100%",
    overflowY: "hidden"
  },
  header: {
    backgroundColor: "beige",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  main: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    position: "relative"
  },
  sideNav: {
    position: "absolute",
    alignSelf: "flex-end",
    width: 320,
    borderLeft: "1px solid #c2c2c2",
    zIndex: 2,
    top: 0,
    right: 0,
    overflowY: "scroll",
    overflowX: "hidden",
    height: "100%"
  },
  onViewport: {
    transform: "translateX(0)"
  },
  cell: {
    padding: 10
  },
  brand: {
    height: 80
  },
  aside: {
    backgroundColor: "#fff",
    padding: 20
  },
  menuIcon: {
    zIndex: 2
  },
  backdrop: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "transparent",
    position: "fixed",
    zIndex: 1
  },
  hide: {
    opacity: 0
  },

  floatingControls: {
    position: "absolute",
    left: 40,
    top: 120,
    zIndex: 2,
    backgroundColor: "#fff"
  }
}));

const Layout = ({ children }) => {
  const [modal, toggleModal] = useState(false);
  const [filterModal, toggleFilterModal] = useState(false);

  const toggleFilterMenu = () => toggleFilterModal(!filterModal);
  const filterModalX = filterModal ? 0 : 400;

  const classes = useStyles();

  const asideClass = modal
    ? `${classes.sideNav} ${classes.onViewport}`
    : `${classes.sideNav}`;

  const toggleMenu = () => toggleModal(!modal);

  return (
    <div className={classes.root}>
      <div className={`${classes.main}`}>
        <Fab
          variant="extended"
          className={classes.floatingControls}
          onClick={toggleFilterMenu}
          aria-label="toggle-filter"
        >
          <FilterListOutlined />
          Filter
        </Fab>
        {children}
        <motion.aside
          className={classes.sideNav}
          initial={{ x: 400 }}
          animate={{ x: filterModalX }}
          transition={{ duration: 0.3, type: "tween" }}
        >
          <div className={`${classes.aside}`}>
            <Filters />
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default Layout;
