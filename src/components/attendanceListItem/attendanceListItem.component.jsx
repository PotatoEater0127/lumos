import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  Typography,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto",
  },
  subTitle: {
    color: theme.palette.text.secondary,
    fontSize: "0.875rem",
  },
}));

export default function FolderList() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemAvatar>
          <div> <Typography align="center">14</Typography>
          <Typography align="center">周一</Typography></div>
         
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <span>協勤 </span>
            </>
          }
          secondary="光明分隊 18:30 - 22:00"
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <MoreHorizIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <div>
            <Typography align="center">11</Typography>
            <Typography align="center">周五</Typography>
          </div>
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <span>協勤 </span>
              <span style={{ fontSize: "0.875rem" }}>光明分隊</span>
            </>
          }
          secondary="18:30 - 22:00"
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <MoreHorizIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <div>
            <Typography align="center">21</Typography>
            <Typography align="center">周一</Typography>
          </div>
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <span>協勤 </span>
              <span style={{ fontSize: "0.875rem" }}>石牌分隊</span>
            </>
          }
          secondary="18:30 - 22:00"
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <MoreHorizIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Typography align="center">14</Typography>
          <Typography align="center">周一</Typography>
        </ListItemAvatar>
        <ListItemText primary="大隊常訓" secondary="18:30 - 22:00" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <MoreHorizIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Typography align="center">14</Typography>
          <Typography align="center">周一</Typography>
        </ListItemAvatar>
        <ListItemText primary="防宣" secondary="18:30 - 22:00" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Typography align="center">14</Typography>
          <Typography align="center">周一</Typography>
        </ListItemAvatar>
        <ListItemText
          primary="Photos"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Typography align="center">14</Typography>
          <Typography align="center">周一</Typography>
        </ListItemAvatar>
        <ListItemText
          primary="Work"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <div>
            <Typography align="center">14</Typography>
            <Typography align="center">周一</Typography>
          </div>
        </ListItemAvatar>
        <ListItemText
          primary="Vacation"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem style={{ height: "112px" }}></ListItem>
    </List>
  );
}
