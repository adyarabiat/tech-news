import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#010101",
    color: "#fff",
  },
  button: {
    color: "#fff",
  },
  items: {
    padding: "3%",
  },
  containerGrid: {
    display: "flex",
    flexDirection: "column",
  },
  copy: {
    background: "#2BBBAD",
  },
  copyText: {
    margin: "7px",
    color: "#010101",
  },
  headers: {
    width: "100px",
    height: "1px",
    background: "#2BBBAD",
    margin: "1em auto",
    position: "relative",
  },
}));
