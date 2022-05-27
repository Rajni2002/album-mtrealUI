import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: "2rem",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer:{
      background:"grey",
      padding: "3rem"
  }
});

export default useStyles;