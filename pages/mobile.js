import { useContext, useEffect, useCallback, useState } from "react";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import { motion, useCycle } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MobileLayout from "../components/MobileLayout";
import Thumbnail from "../components/Thumbnail";
import Draggable from "../components/Draggable";
import AutoComplete from "../components/AutoComplete";

import Chip from "@material-ui/core/Chip";

import { AppContext } from "../providers/AppProvider";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer"
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
  },
  padsList: {
    height: 600,
    overflowY: "scroll"
  },
  filterChip: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1)
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
    location,
    setLocation
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
                <li key={pad.id} className={classes.root}>
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

  const handleLocationChange = newLocation => {
    setLocation({
      ...location,
      ...newLocation
    });
  };

  useEffect(() => {
    console.log("filters ", { ...filters, location: location.name });
    padsContent.getPads({ variables: { ...filters, location: location.name } });
  }, [filters, location]);

  return (
    <MobileLayout>
      <div className={classes.splitContainer}>
        <DynamicComponentWithNoSSR
          location={location}
          pads={padsContent.data.pads}
          onClick={handleMarkerClick}
        />
        <Draggable>
          <AutoComplete onLocationChange={handleLocationChange} />
          <Chip
            label="Furnished"
            variant="outlined"
            onDelete={() => {}}
            className={classes.filterChip}
          />
          <Chip
            label="3+ Bedrooms"
            variant="outlined"
            onDelete={() => {}}
            className={classes.filterChip}
          />
          <ul className={classes.padsList}>
            {padsContent.data?.pads?.map(pad => {
              return (
                <li key={pad.id}>
                  <Thumbnail pad={pad} />
                </li>
              );
            })}
          </ul>
        </Draggable>
      </div>
    </MobileLayout>
  );
};

export default Proto;
