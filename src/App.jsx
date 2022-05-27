// eslint-disable-next-line
import * as React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./styles"

const cards = [1,2,3,4,5,6,7,8,9]

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: "5rem" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              PhotoAlbum
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              lorem100 bhcbrubbcrgj cbchbrhbrhb rhrbhb hrbrbhbrhb
              hrbhrbhrbrhbrhb rhbrhbrhrbh rbrhbrhrbhr hrbrhbrhr sbcaubcruycuybf
              rugurygryu
            </Typography>
            <div>
              <Grid
                container
                spacing={10}
                justify="center"
                alignItems="center"
                direction="row"
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map((card)=>(
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to drive the
                    content
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      </footer>
    </>
  );
}

export default App;
