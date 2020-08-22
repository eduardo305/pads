import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Layout from "../components/DesktopLayout";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateRows: "80px 1fr",
    gridTemplateColumns: "1fr 300px",
    height: "100%"
    // backgroundColor: theme
  },
  cell: {
    padding: 10
  },
  logo: {
    borderRight: "1px solid #c2c2c2"
  },
  main: {
    borderRight: "1px solid #c2c2c2",
    backgroundColor: "#f2f2f2"
  },
  side: {
    backgroundColor: "#fff"
  },
  resultsCount: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  resultsControls: {
    display: "flex",
    alignItems: "center",
    listStyleType: "none"
  },
  control: {
    marginRight: 10
  },
  grid: {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(260px, 1fr))`,
    gap: "20px",
    listStyleType: "none",
    padding: 0,
    margin: 0
  }
}));

const Proto = () => {
  const classes = useStyles();

  return <Layout>layout</Layout>;
};

export default Proto;
