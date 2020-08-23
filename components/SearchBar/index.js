import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
// import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
// import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: "2px 4px",
    display: "flex",
    // alignItems: "center",
    width: "100%",
    height: "100%"
    // backgroundColor: '#e2e2e2'
  },
  input: {
    // marginLeft: theme.spacing(1),
    flex: 1,
    height: "100%"
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} elevation={0}>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search for homes in..."
        inputProps={{ "aria-label": "search for homes in" }}
      />
      {/* <Divider className={classes.divider} orientation="vertical" />
			<IconButton
				color="primary"
				className={classes.iconButton}
				aria-label="directions"
			>
				<DirectionsIcon />
			</IconButton> */}
    </Paper>
  );
}
