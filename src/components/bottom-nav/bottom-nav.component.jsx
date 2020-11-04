import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Assignment, Event, Notifications, Settings } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const history = useHistory();
  console.log(history);
  const [curValue, setCurValue] = useState(0);
  return (
    <BottomNavigation
      value={curValue}
      onChange={(e, newValue) => setCurValue(newValue)}
      className={classes.stickToBottom}
      showLabels
    >
      <BottomNavigationAction
        label="簽到"
        icon={<Assignment />}
        onClick={() => {
          history.push("/");
        }}
      />
      <BottomNavigationAction label="班表" icon={<Event />} />
      <BottomNavigationAction label="通知" icon={<Notifications />} />
      <BottomNavigationAction
        label="設定"
        icon={<Settings />}
        onClick={() => {
          history.push("/config");
        }}
      />
    </BottomNavigation>
  );
}
