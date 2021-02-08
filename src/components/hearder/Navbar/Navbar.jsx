import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import myVedio from "../../../assets/video.mp4";
import useStyles from "./styled";
import { Typography } from "@material-ui/core";
import SideDrawer from "./Drawer";

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = (props) => {
  const classes = useStyles();

  const navLinks = [
    { title: `COVID-19`, path: `/about-us` },
    { title: `EXPLORE`, path: `/product` },
    { title: `LATEST`, path: `/blog` },
    { title: `REVIEWS`, path: `/contact` },
    { title: `TECH`, path: `/faq` },
    { title: `NEWS`, path: `/faq` },
  ];

  return (
    <div className={classes.nav}>
      <CssBaseline />
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.Toolbar} id="back-to-top-anchor">
          <IconButton className={classes.menuButton}>
            <p>TECH NEWS</p>
          </IconButton>
          <div className={classes.Buttons}>
            <Button className={classes.Button}>COVID-19</Button>
            <Button className={classes.Button}>EXPLORE</Button>
            <Button className={classes.Button}>LATEST</Button>
            <Button className={classes.Button}>REVIEWS</Button>
            <Button className={classes.Button}>TECH</Button>
            <Button className={classes.Button}>NEWS</Button>
          </div>
          <IconButton className={classes.Mobile}>
            <SideDrawer navLinks={navLinks} />
          </IconButton>
        </Toolbar>
        <Typography style={{ marginTop: "300px", fontSize: "26px" }}>
          <q>It's not a faith in technology. It's faith in people.</q>
          <figcaption>
            &mdash; Steve Jobs, <cite>Co-founder of Apple</cite>
          </figcaption>
        </Typography>
        <video
          src={myVedio}
          muted
          loop
          autoPlay
          className={classes.myVedio}
        ></video>
      </AppBar>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Navbar;
