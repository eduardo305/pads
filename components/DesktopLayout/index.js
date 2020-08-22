import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateRows: "80px 1fr",
    gridTemplateColumns: "1fr 300px",
    gridTemplateAreas: `"header sidenav"
    "main sidenav"`,
    height: "100%"
  },
  header: {
    gridArea: "header",
    backgroundColor: "beige",
    borderRight: "1px solid #c2c2c2"
  },
  sideNav: {
    gridArea: "sidenav"
  },
  cell: {
    padding: 10
  },
  brand: {
    height: 80
  },
  main: {
    borderRight: "1px solid #c2c2c2",
    backgroundColor: "#f2f2f2",
    gridArea: "main"
  },
  aside: {
    backgroundColor: "#fff",
    backgroundColor: "salmon",
    height: `calc(100vh - 80px)`
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={`${classes.cell} ${classes.header}`}>header</div>
      <div className={`${classes.cell} ${classes.main}`}>{children}</div>
      <aside className={classes.sideNav}>
        <div className={`${classes.cell} ${classes.brand}`}>brand</div>
        <div className={`${classes.cell} ${classes.aside}`}>side</div>
      </aside>
    </div>
  );
};

export default Layout;
