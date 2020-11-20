import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import { motion } from "framer-motion";

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
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
    paddingLeft: 10,
    paddingRight: 10,
    color: theme.palette.primary.main,
    marginTop: 10,
    width: "max-content",
    borderRadius: 4
  }
}));

const PadQuickView = ({ pad: { price, title, address }, onClose }) => {
  const quickViewX = title ? 0 : 800;
  const classes = useStyles();

  return (
    <motion.div
      initial={{ x: 800 }}
      animate={{ x: quickViewX }}
      style={{
        width: 400,
        backgroundColor: "white",
        position: "absolute",
        right: 40,
        margin: "auto"
      }}
      onClick={onClose}
      tabIndex="0"
    >
      <ClickAwayListener onClickAway={onClose}>
        <Card className={classes.card} elevation={0}>
          <CardMedia
            className={classes.media}
            image="https://img.zumpercdn.com/301433983/1280x960?auto=format&w=1691&h=955&fit=fill"
            title="Tan Plaza Apartment"
          />

          <CardContent>
            <Typography
              variant="overline"
              color="primary"
              className={classes.customOverline}
            >
              4 Beds - 3 Baths
            </Typography>
            <Typography variant="h6">{title}</Typography>

            <Typography variant="caption" color="textSecondary">
              {address}
            </Typography>

            <Box className={classes.priceBox}>
              <Typography
                variant="caption"
                color="textSecondary"
                component="div"
              >
                Rent: $4100
              </Typography>
              <strong>{`Total: ${price}`}</strong>
            </Box>
          </CardContent>
          <CardActions>
            <Button color="primary">Request Info</Button>
            <Button color="primary">Apply</Button>
          </CardActions>
        </Card>
      </ClickAwayListener>
    </motion.div>
  );
};

export default PadQuickView;
