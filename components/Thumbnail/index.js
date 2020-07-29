import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
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
  card: {
    position: "relative"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  favoriteIcon: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 10,
    padding: 5,
    backgroundColor: `#fff`,
    borderRadius: "50%",
    cursor: "pointer"
  },
  featuresContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    overflowY: "scroll"
  },
  features: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0
  },
  feature: {
    marginRight: 10,
    display: "flex",
    alignItems: "center"
  },
  featureValue: {
    marginLeft: 10
  },
  links: {
    fontSize: 16,
    display: "flex",
    alignItems: "center"
  }
}));

const Thumbnail = ({ pad }) => {
  const classes = useStyles();

  return (
    <Link href={`/details/[id]`} as={`/details/${pad}`}>
      {pad ? (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://img.zumpercdn.com/301433983/1280x960?auto=format&w=1691&h=955&fit=fill"
            title="Tan Plaza Apartment"
          />
          <div className={classes.favoriteIcon}>
            <FavoriteBorderOutlined />
          </div>
          <CardContent>
            <Typography variant="overline" color="textSecondary">
              4,300/mo
            </Typography>
            <Typography gutterBottom variant="body2">
              4 Bed/3 Bath charming home
            </Typography>
            <Typography display="block" variant="caption" color="textSecondary">
              1055 East Evelyn Avenue, CA 94086
            </Typography>
          </CardContent>
          <Divider />
          <div className={classes.featuresContainer}>
            <ul className={classes.features}>
              <li className={classes.feature}>
                <Chip label="4 bedrooms" variant="outlined" />
              </li>
              <li className={classes.feature}>
                <Chip label="3 bathrooms" variant="outlined" />
              </li>
            </ul>
            <MoreVertOutlined />
          </div>
        </Card>
      ) : (
        <>
          <Skeleton variant="rect" width={"100%"} height={200} />
          <Skeleton />
          <Skeleton width="60%" />
        </>
      )}
    </Link>
  );
};

export default Thumbnail;
