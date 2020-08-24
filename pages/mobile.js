import { useContext, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MobileLayout from "../components/MobileLayout2";
import Thumbnail from "../components/Thumbnail";

import { AppContext } from "../providers/AppProvider";

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
  const { query, filters, pads, setPads } = useContext(AppContext);
  const classes = useStyles();

  const debouncedHandler = useCallback(
    debounce(term => {
      console.log("Trigger request for ", term);
      setPads([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 300),
    []
  );

  useEffect(() => {
    // console.log("Trigger request for ", query);
    // console.log("Trigger request for ", filters);
    debouncedHandler(query);
  }, [query]);

  return (
    <MobileLayout>
      <Typography
        variant="body2"
        paragraph
      >{`${pads.length} properties found in ${query}`}</Typography>
      <ul className={classes.grid}>
        {pads.map(pad => {
          return (
            <li key={pad} className={classes.root}>
              <Thumbnail pad={pad} />
            </li>
          );
        })}
      </ul>
    </MobileLayout>
  );
};

export default Proto;
