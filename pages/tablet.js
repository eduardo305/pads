import { useContext, useEffect, useCallback, useState } from "react";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import { motion, useCycle } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TabletLayout from "../components/TabletLayout";
import Thumbnail from "../components/Thumbnail";
import PadQuickView from "../components/PadQuickView";

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
  },
  splitContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100%"
  }
}));

const Proto = () => {
  const {
    query,
    setQuery,
    filters,
    padsContent,
    pads,
    setPads,
    location
  } = useContext(AppContext);
  const [selectedPad, setSelectedPad] = useState({});
  const classes = useStyles();

  const renderPadsGrid = () => {
    if (padsContent.loading) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
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
        </div>
      );
    }
  };

  const handleMarkerClick = pad => {
    setSelectedPad(pad);
  };

  useEffect(() => {
    padsContent.getPads({ variables: filters });
  }, [filters]);

  return (
    <TabletLayout>
      <div className={classes.splitContainer}>
        <DynamicComponentWithNoSSR
          location={location}
          pads={padsContent.data.pads}
          onClick={handleMarkerClick}
        />
        {selectedPad.title && (
          <PadQuickView pad={selectedPad} onClose={() => setSelectedPad({})} />
        )}
      </div>
    </TabletLayout>
  );
};

export default Proto;
