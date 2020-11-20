import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
      light: "#ecf1fe"
    },
    secondary: {
      dark: "#8634fa",
      main: "#c51162"
    },
    error: {
      main: red.A400
    },
    background: {
      paper: "#fff",
      default: "#f8f9fd"
    }
  },
  typography: {
    h6: {
      fontSize: "1rem"
    }
  }
});

export default theme;
