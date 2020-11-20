import { useState } from "react";

import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    padding: 10,
    position: "absolute",
    bottom: "-90vh",
    width: "100%",
    height: "100vh",
    overflowY: "scroll"
  }
}));

const Draggable = ({ children }) => {
  const [y, setY] = useState(0);
  const classes = useStyles();
  function onPan(event, info, t) {
    console.log(info.point.x, info.point.y);
  }

  return (
    <motion.div
      className={classes.root}
      onPan={onPan}
      drag="y"
      // dragElastic={1}
      // dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      // dragMomentum={false}
      dragConstraints={{
        top: -700,
        bottom: 0
      }}
    >
      {children}
    </motion.div>
  );
};

export default Draggable;
