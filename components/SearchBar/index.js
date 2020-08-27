import { useContext, useCallback } from "react";
import { debounce } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { AppContext } from "../../providers/AppProvider";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%"
  },
  input: {
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

export default function CustomizedInputBase({ onSubmit }) {
  const { query, setQuery, setPads } = useContext(AppContext);
  const classes = useStyles();

  const handleChange = e => {
    const term = e.target.value;
    setQuery(term);
    debouncedHandler(term);
  };

  const debouncedHandler = useCallback(
    debounce(term => {
      console.log("onSubmit", onSubmit);
      onSubmit && onSubmit(term);
    }, 300),
    []
  );

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
        value={query}
        onChange={handleChange}
      />
    </Paper>
  );
}
