import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
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
    paddingTop: "56.25%", // 16:9
    boxShadow: "2px 1px 20px #333",
    borderRadius: 4,
    filter: `brightness(0.9)`
  },
  favoriteIcon: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
    padding: 2,
    color: "#fff",
    // backgroundColor: `#fff`,
    opacity: 0.8,
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
  },
  customOverline: {
    fontSize: "0.6rem",
    letterSpacing: 1,
    lineHeight: 2
  },
  actionContainer: {
    padding: "5px 16px",
    justifyContent: "space-between"
  },
  chip: {
    position: "absolute",
    top: 10,
    left: 10
  },
  priceBox: {
    backgroundColor: "#dee5f3",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#2063e6",
    fontWeight: "600",
    marginTop: 10,
    width: "max-content",
    borderRadius: 4
  }
}));

const Thumbnail = ({ pad }) => {
  const classes = useStyles();

  return (
    <Link href={`/details/[id]`} as={`/details/${pad}`}>
      {pad ? (
        <Card className={classes.card} elevation={0}>
          <CardMedia
            className={classes.media}
            image="https://img.zumpercdn.com/301433983/1280x960?auto=format&w=1691&h=955&fit=fill"
            title="Tan Plaza Apartment"
          />
          <div className={classes.favoriteIcon}>
            <FavoriteBorderOutlined fontSize="small" />
          </div>
          <Chip
            label="NEW"
            size="small"
            color="secondary"
            className={classes.chip}
          />
          <CardContent>
            <Typography variant="overline" className={classes.customOverline}>
              4 Beds - 3 Baths
            </Typography>
            <Typography variant="h6">Beautiful 4B apartment</Typography>

            <Typography variant="caption" color="textSecondary">
              1055 East Evelyn Avenue, CA
            </Typography>

            <Box className={classes.priceBox}>
              <Typography
                variant="caption"
                color="textSecondary"
                component="div"
              >
                Rent: $4100
              </Typography>
              Total: $4700
            </Box>
          </CardContent>
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
