import React, { useState } from "react";
import { Drawer, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles({
  Buttons: {
    display: "flex",
    flexDirection: "column",
  },
  Button: {
    margin: "20px 20px",
    border: "solid 1px #2BBBAD",
    "&:hover": {
      background: "#2BBBAD",
      color: "#fff",
    },
  },
  list: {
    width: 250,
    height: "100vh",
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `#010101`,
  },
});

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.Buttons}>
        <Button className={classes.Button}>COVID-19</Button>
        <Button className={classes.Button}>EXPLORE</Button>
        <Button className={classes.Button}>LATEST</Button>
        <Button className={classes.Button}>REVIEWS</Button>
        <Button className={classes.Button}>TECH</Button>
        <Button className={classes.Button}>NEWS</Button>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" style={{ color: `#fff` }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
