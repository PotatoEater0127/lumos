import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles({
  stickToBottomMiddle: {
    position: "fixed",
    bottom: "10px",
    left: "50%",
    zIndex: 1,
    transform: ["translate(-50%, -80%)"],
  },
});

export default function CheckInButton(props) {
  const classes = useStyles();
  return (
    <Fab
      className={classes.stickToBottomMiddle}
      color="primary"
      aria-label="checkIn"
      onClick={props.onClick}
    >
      <Edit />
    </Fab>
  );
}
