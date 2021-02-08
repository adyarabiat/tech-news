import React from "react";

import useStyles from "./styled";
import Cards from "./Cards/Cards";
import { Grid } from "@material-ui/core";

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>Breaking News</h1>
      <Grid container justify="center" className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Cards
                className={classes.card}
                pic="https://source.unsplash.com/2EJCSULRwC8"
                subject="The Future of Artificial Intelligence
        "
                parg="By 2050 robot 'brains' based on computers that execute 100 trillion instructions per second will start rivaling human intelligence"
              />
            </Grid>
            <Grid item>
              <Cards
                className={classes.card}
                pic="https://source.unsplash.com/XYrjl3j7smo"
                subject="Drone
        "
                parg="Tech gives drone the ability to avoid mid-air crashes"
              />
            </Grid>

            <Grid item>
              <Cards
                className={classes.card}
                pic="https://source.unsplash.com/Q1p7bh3SHj8"
                subject="NASA
        "
                parg="NASA Invites Media to Second Test to Fire Rocket for Artemis Missions"
              />
            </Grid>
            <Grid item>
              <Cards
                className={classes.card}
                pic="https://source.unsplash.com/Q1p7bh3SHj8"
                subject="NASA
        "
                parg="NASA Invites Media to Second Test to Fire Rocket for Artemis Missions"
              />
            </Grid>
            <Grid item>
              <Cards
                className={classes.card}
                pic="https://source.unsplash.com/Q1p7bh3SHj8"
                subject="NASA
        "
                parg="NASA Invites Media to Second Test to Fire Rocket for Artemis Missions"
              />
            </Grid>
            <Grid item>
              <Cards
                className={classes.card}
                pic="https://source.unsplash.com/Q1p7bh3SHj8"
                subject="NASA
        "
                parg="NASA Invites Media to Second Test to Fire Rocket for Artemis Missions"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
