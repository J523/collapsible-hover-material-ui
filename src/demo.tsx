import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Container from "@material-ui/core/Container";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  })
);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [collapse, setCollapse] = React.useState(false);

  const handleMouseOver = () => {
    setOpen(true);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  const handleCollapseIn = () => {
    console.log("collapsing in");
    setCollapse(true);
    console.log(collapse);
  };

  const handleCollapseOut = () => {
    console.log("collapsing out");
    setCollapse(false);
    console.log(collapse);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem
        button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open || collapse} timeout="auto" unmountOnExit>
        <Container>
          <List
            onMouseOver={handleCollapseIn}
            onMouseOut={handleCollapseOut}
            component="div"
            disablePadding
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred1" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred2" />
            </ListItem>
          </List>
        </Container>
      </Collapse>
    </List>
  );
}
