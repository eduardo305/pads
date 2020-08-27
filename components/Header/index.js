import { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withApollo } from "../../libs/apollo";
import { useLazyQuery } from "@apollo/client";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import NotificationsActiveOutlined from "@material-ui/icons/NotificationsActiveOutlined";
import { Typography } from "@material-ui/core";

import { AppContext } from "../../providers/AppProvider";
import SearchInput from "../SearchBar";

// import { ALL_CHARACTERS } from '../../gql/allCharacters';
import { ALL_PADS } from "../../gql/allPads";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateRows: 80,
    gridTemplateColumns: "100px 250px 1fr min-content",
    gridGap: 20,
    alignItems: "center",
    height: "100%",
    // justifyContent: "space-between",
    width: "100%",
    paddingLeft: 20,
    borderBottom: `1px solid ${theme.palette.divider}`
    // height: "100%"
    // backgroundColor: "transparent"
  },
  logo: { fontSize: `1.2rem`, fontWeight: "bold" },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  // divider: {
  //   height: 28,
  //   margin: 4
  // },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  },
  menuWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  links: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(50px, 1fr))",
    gridTemplateRows: "1fr",
    gridGap: theme.spacing(2),

    // "& > * + *": {
    //   marginLeft: theme.spacing(2)
    // },
    padding: "0 20px"
  }
}));

const Header = ({ toggleMenu }) => {
  const { query, filters, padsContent, setPads } = useContext(AppContext);
  const classes = useStyles();

  const handleSubmit = term => {
    padsContent.getPads({ variables: filters });
  };

  return (
    <Paper component="div" className={classes.root} elevation={0} square>
      <span className={classes.logo}>ZUGOR</span>

      <div className={classes.wrapper}>
        <ul className={classes.links}>
          <Link color="inherit" variant="body2">
            Buy
          </Link>
          <Link color="inherit" variant="body2">
            Rent
          </Link>
          <Link color="inherit" variant="body2">
            Sell
          </Link>
        </ul>
        <Divider orientation="vertical" flexItem />
      </div>

      <div className={classes.wrapper}>
        <SearchInput onSubmit={handleSubmit} />
      </div>

      <div className={classes.menuWrapper}>
        <IconButton className={classes.iconButton} aria-label="notifications">
          <Badge color="secondary" variant="dot">
            <NotificationsActiveOutlined />
          </Badge>
        </IconButton>
        <IconButton
          className={classes.iconButton}
          aria-label="menu"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default withApollo({ ssr: true })(Header);
