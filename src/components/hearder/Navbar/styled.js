import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  nav: {
    height: "100vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: "70px",
    width: "70px",
    color: "#FFF",
  },

  title: {
    flexGrow: 1,
  },
  AppBar: {
    background: "transparent",
    boxShadow: "none",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  Buttons: {
    marginLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  Button: {
    color: "#fff",
    margin: "10px",
    border: "1px solid #2BBBAD",
    "&:hover": {
      background: "#2BBBAD",
      color: "black",
    },
  },
  Mobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    color: "#FFF",
  },
  backToTop: {
    height: "1px",
  },
  myVedio: {
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",

    zIndex: "-100",
  },
  menu: {
    color: "black",
  },
}));
