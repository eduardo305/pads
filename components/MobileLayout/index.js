import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuOutlined from "@material-ui/icons/MenuOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

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
    borderLeft: "1px solid #c2c2c2",
    transform: "translateX(500px)",
    transition: `transform 0.3ms ease`,
    zIndex: 2
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
  }
}));

const Layout = ({ children }) => {
  const [modal, toggleModal] = useState(false);
  const classes = useStyles();

  const asideClass = modal
    ? `${classes.sideNav} ${classes.onViewport}`
    : `${classes.sideNav}`;

  const toggleMenu = () => toggleModal(!modal);

  return (
    <div className={classes.root}>
      <div className={`${classes.cell} ${classes.header}`}>
        <IconButton
          aria-label="menu"
          className={modal ? classes.hide : classes.menuIcon}
          onClick={toggleMenu}
        >
          <MenuOutlined />
        </IconButton>
      </div>
      <div className={`${classes.cell} ${classes.main}`}>{children}</div>
      <div
        className={modal ? classes.backdrop : classes.hide}
        onClick={toggleMenu}
      />
      <aside className={asideClass}>
        <div className={`${classes.cell} ${classes.brand}`}>brand</div>
        <div className={`${classes.cell} ${classes.aside}`}>side</div>
      </aside>
    </div>
  );
};

export default Layout;
