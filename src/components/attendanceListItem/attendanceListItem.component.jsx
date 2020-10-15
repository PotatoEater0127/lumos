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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto",
  },
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              協勤 <span style={{ fontSize: "0.875rem" }}>光明分隊</span>
            </>
          }
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <span>協勤 </span>
              <span style={{ fontSize: "0.875rem" }}>光明分隊</span>
            </>
          }
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="分隊常訓"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="協勤"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="大隊常訓"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="防宣"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Photos"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Work"
          secondary="Jan 7, 2014  /  18:30 - 22:00"
        />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
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
