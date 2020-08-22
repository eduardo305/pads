import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import MobileLayout from "../components/MobileLayout2";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"

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

  return <MobileLayout>mobile layout</MobileLayout>;
};

export default Proto;
