import React from "react";

import useStyles from "./styled";

import { Grid, Button } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            justify="center"
            spacing={6}
            className={classes.items}
          >
            <Grid item className={classes.containerGrid}>
              <h2>Useful links</h2>
              <div className={classes.headers}></div>
              <Button className={classes.button}>
                Frequently Asked Questions
              </Button>
              <Button className={classes.button}>Browsers and devices</Button>
              <Button className={classes.button}>License</Button>
              <Button className={classes.button}>ChangeLog</Button>
              <Button className={classes.button}>Privacy Policy</Button>
              <Button className={classes.button}>Return/Refund policy</Button>
            </Grid>
            <Grid item className={classes.containerGrid}>
              <h2>RESOURCES</h2>
              <div className={classes.headers}></div>
              <Button className={classes.button}>Arstechnica.com </Button>
              <Button className={classes.button}>Techcrunch.com</Button>
              <Button className={classes.button}>Engadget.com</Button>
              <Button className={classes.button}>Thenextweb.com</Button>
              <Button className={classes.button}>Wired.com Policy</Button>
              <Button className={classes.button}>Tomshardware.com</Button>
            </Grid>
            <Grid item className={classes.containerGrid}>
              <h2>FREE TUTORIALS</h2>
              <div className={classes.headers}></div>
              <Button className={classes.button}>Basics (HTML/CSS/JS)</Button>
              <Button className={classes.button}>Browsers and devices</Button>
              <Button className={classes.button}>Material-UI</Button>
              <Button className={classes.button}>React</Button>
              <Button className={classes.button}>Sass</Button>
            </Grid>
            <Grid item className={classes.containerGrid}>
              <h2>Company</h2>
              <div className={classes.headers}></div>
              <Button startIcon={<GroupIcon />} className={classes.button}>
                Our team
              </Button>
              <Button startIcon={<DataUsageIcon />} className={classes.button}>
                Company data
              </Button>
              <Button
                startIcon={<RecordVoiceOverIcon />}
                className={classes.button}
              >
                For media
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.copy} item xs={12}>
          <Grid
            container
            justify="center"
            spacing={2}
            className={classes.copyText}
          >
            © 2021 Ady Arabiat, all rights reserved. Made with ❤️ for a better
            web.
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
