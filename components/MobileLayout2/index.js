import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MenuOutlined from "@material-ui/icons/MenuOutlined";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { motion, useCycle } from "framer-motion";

import Header from "../Header";
import Filters from "../Filters";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: "100%",
    overflowX: "hidden"
  },
  header: {
    height: 81,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  main: {
    backgroundColor: theme.palette.background.default,
    height: "100%"
  },
  sideNav: {
    position: "absolute",
    alignSelf: "flex-end",
    width: 320,
    zIndex: 2,
    borderLeft: `1px solid ${theme.palette.divider}`
  },
  onViewport: {
    transform: "translateX(0)"
  },
  cell: {
    padding: 10
  },
  brand: {
    height: 81,
    backgroundColor: "#fff",
    display: "grid",
    gridTemplateColumns: "min-content 1fr min-content",
    gridGap: 10,
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  aside: {
    backgroundColor: theme.palette.background.default,
    height: `calc(100vh - 80px)`,
    display: "flex",
    justifyContent: "center",
    overflowY: "scroll"
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
  iconButton: {
    opacity: 0.6
  }
}));

const Layout = ({ children }) => {
  const [modal, toggleModal] = useState(false);
  const classes = useStyles();

  const toggleMenu = () => toggleModal(!modal);

  const modalX = modal ? 0 : 400;

  return (
    <div className={classes.root}>
      <div className={`${classes.header}`}>
        <Header toggleMenu={toggleMenu} />
      </div>
      <div className={`${classes.cell} ${classes.main}`}>{children}</div>
      <div
        className={modal ? classes.backdrop : classes.hide}
        onClick={toggleMenu}
      />
      <motion.aside
        className={classes.sideNav}
        initial={{ x: 400 }}
        animate={{ x: modalX }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <div className={`${classes.cell} ${classes.brand}`}>
          <Avatar
            alt="Jennifer Parker"
            src="https://i.dailymail.co.uk/1s/2020/07/04/03/30373434-0-image-m-41_1593828033909.jpg"
          />
          <div>
            <Typography variant="body2">Jennifer Parker</Typography>
            <Typography variant="caption" color="textSecondary" component="div">
              Client
            </Typography>
          </div>
          <IconButton className={classes.iconButton} aria-label="settings">
            <SettingsOutlined />
          </IconButton>
        </div>
        <div className={`${classes.cell} ${classes.aside}`}>
          <Filters />
        </div>
      </motion.aside>
    </div>
  );
};

export default Layout;
