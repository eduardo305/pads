import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {
  LocalHotelOutlined,
  SquareFootOutlined,
  DriveEtaOutlined,
  FavoriteBorderOutlined,
  SortByAlphaOutlined,
  FilterList,
  MoreVertOutlined
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 1024,
    height: "100%",
    margin: "auto",
    // backgroundColor: "beige",
    padding: 10,
    display: "grid",
    gridTemplateRows: `40% 1fr`,
    gridTemplateColumns: "70% minmax(300px, 1fr)",
    gridGap: 20
  },
  gallery: {
    gridColumn: "auto / span 2",
    backgroundColor: "blue"
  },
  details: {
    // backgroundColor: "gray"
  },
  listItem: {
    padding: "8px 0"
  }
}));

const Details = ({ pad }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.gallery}></div>
      <div className={classes.content}>
        <Typography variant="h5" component="h1">
          4 Bed 3Bath charming house
        </Typography>
        <Typography variant="overline" component="h2" paragraph>
          1055 East Evelyn Avenue, Sunnyvale, CA 94086
        </Typography>
        <Typography variant="body1" paragraph>
          This Katy two-story home offers a fireplace, and a two-car garage.
          This home is vacant and cleaned regularly. This Katy two-story home
          offers a fireplace, and a two-car garage. This home is vacant and
          cleaned regularly. This Katy two-story home offers a fireplace, and a
          two-car garage. This home is vacant and cleaned regularly. This Katy
          two-story home offers a fireplace, and a two-car garage. This home is
          vacant and cleaned regularly. This Katy two-story home offers a
          fireplace, and a two-car garage. This home is vacant and cleaned
          regularly. This Katy two-story home offers a fireplace, and a two-car
          garage. This home is vacant and cleaned regularly. This Katy two-story
          home offers a fireplace, and a two-car garage. This home is vacant and
          cleaned regularly.
        </Typography>
      </div>
      <aside className={classes.details}>
        <Card>
          <CardContent>
            <Typography>Eye catching</Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              459 people recently visited this page
            </Typography>
            <Divider />
            <List>
              <ListItem className={classes.listItem} alignItem="flex-start">
                <ListItemText primary="Rent" />
                <ListItemText secondary="$4700" style={{ textAlign: "end" }} />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText primary="HOA" />
                <ListItemText secondary="$400" style={{ textAlign: "end" }} />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText primary="Insurance" />
                <ListItemText secondary="$5/mo" style={{ textAlign: "end" }} />
              </ListItem>
              <ListItem divider />
              <ListItem className={classes.listItem}>
                <ListItemText primary="Total" />
                <ListItemText primary="$5105" style={{ textAlign: "end" }} />
              </ListItem>
            </List>

            <Box pb={1}>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                disableRipple
                fullWidth
              >
                Schedule a visit
              </Button>
            </Box>

            <Button
              variant="outlined"
              color="primary"
              disableElevation
              disableRipple
              fullWidth
            >
              Apply
            </Button>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
};

export default Details;
