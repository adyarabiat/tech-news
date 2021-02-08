import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "20px",
  },
});

const Cards = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.pic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <p gutterBottom variant="h5" component="h2">
            {props.subject}
          </p>
          <p variant="body2" color="textSecondary" component="p">
            {props.parg}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
