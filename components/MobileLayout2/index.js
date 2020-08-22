import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuOutlined from "@material-ui/icons/MenuOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { motion, useCycle } from "framer-motion";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: "100%"
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
    height: "100%"
  },
  sideNav: {
    position: "absolute",
    alignSelf: "flex-end",
    width: 300,
    zIndex: 2,
    borderLeft: "1px solid #c2c2c2"
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
    backgroundColor: "salmon",
    height: `calc(100vh - 80px)`
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
  }
}));

const Layout = ({ children }) => {
  const [modal, toggleModal] = useState(false);
  const classes = useStyles();

  const toggleMenu = () => toggleModal(!modal);

  const modalX = modal ? 0 : 400;

  return (
    <div className={classes.root}>
      <div className={`${classes.cell} ${classes.header}`}>
        <IconButton
          aria-label="menu"
          className={classes.menuIcon}
          onClick={() => toggleMenu()}
        >
          <MenuOutlined />
        </IconButton>
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
        <div className={`${classes.cell} ${classes.brand}`}>brand</div>
        <div className={`${classes.cell} ${classes.aside}`}>side</div>
      </motion.aside>
    </div>
  );
};

export default Layout;
