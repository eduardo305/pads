import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import MuiLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  LocalHotelOutlined,
  SquareFootOutlined,
  DriveEtaOutlined,
  FavoriteBorderOutlined,
  SortByAlphaOutlined,
  FilterList,
  MoreVertOutlined
} from "@material-ui/icons";

import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Thumbnail from "../components/Thumbnail";

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
    margin: 0,
    maxWidth: 920
  }
}));

const pads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <SearchBar />
        <div className={classes.resultsCount}>
          {`${pads.length} homes found in Sunnyvale, CA`}
          <ul className={classes.resultsControls}>
            <li className={classes.control}>
              <MuiLink
                aria-controls="sortby-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.links}
              >
                {mobile ? (
                  <IconButton aria-label="Sort by">
                    <SortByAlphaOutlined />
                  </IconButton>
                ) : (
                  <Button
                    variant="outlined"
                    startIcon={<SortByAlphaOutlined />}
                  >
                    Sort by
                  </Button>
                )}
              </MuiLink>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Price: low - high</MenuItem>
                <MenuItem onClick={handleClose}>Price: high - low</MenuItem>
                <MenuItem onClick={handleClose}>Published date</MenuItem>
              </Menu>
            </li>
            <li>
              <MuiLink
                onClick={event => event.preventDefault()}
                className={classes.links}
              >
                {mobile ? (
                  <IconButton aria-label="Filter">
                    <FilterList />
                  </IconButton>
                ) : (
                  <Button variant="outlined" startIcon={<FilterList />}>
                    Filter
                  </Button>
                )}
              </MuiLink>
            </li>
          </ul>
        </div>
        <ul className={classes.grid}>
          {pads.map(pad => {
            return (
              <li key={pad} className={classes.root}>
                <Thumbnail pad={pad} />
              </li>
            );
          })}
        </ul>
      </main>

      <footer></footer>

      <style jsx>{`
        main {
          max-width: 920px;
          margin: auto;
          padding: 0 20px;
        }

        .container {
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
