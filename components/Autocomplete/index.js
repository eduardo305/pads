import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "beige"
  }
}));

const options = [
  {
    name: "Sunnyvale",
    latitude: 37.375180799999995,
    longitude: -122.0018176
  },
  {
    name: "Mountain View",
    latitude: 37.386051,
    longitude: -122.083855
  },
  {
    name: "Campbel",
    latitude: 37.287167,
    longitude: -121.949959
  }
];

const AutoComplete = ({ onLocationChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        freeSolo
        id="city-search"
        disableClearable
        options={options.map(option => option.name)}
        onChange={(event, newValue) => {
          onLocationChange &&
            onLocationChange(options.find(option => option.name === newValue));
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Search city"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
};

export default AutoComplete;
