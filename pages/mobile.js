import { useContext, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MobileLayout from "../components/MobileLayout2";
import Thumbnail from "../components/Thumbnail";

import { AppContext } from "../providers/AppProvider";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer"
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
  const { query, setQuery, filters, padsContent, pads, setPads } = useContext(
    AppContext
  );
  const classes = useStyles();

  const renderPadsGrid = () => {
    if (padsContent.loading) {
      return <div>loading...</div>;
    } else {
      return (
        <>
          {
            <Typography
              variant="body2"
              paragraph
            >{`${padsContent.data?.pads?.length} properties found in ${query}`}</Typography>
          }
          <ul className={classes.grid}>
            {padsContent.data?.pads?.map(pad => {
              return (
                <li key={pad} className={classes.root}>
                  <Thumbnail pad={pad} />
                </li>
              );
            })}
          </ul>
        </>
      );
    }
  };

  useEffect(() => {
    console.log("filters: ", filters);
    padsContent.getPads({ variables: filters });
  }, [filters]);

  return <MobileLayout>{renderPadsGrid()}</MobileLayout>;
  // return (
  //   <MobileLayout>
  //     <DynamicComponentWithNoSSR pads={pads} />
  //   </MobileLayout>
  // );
};

export default Proto;
