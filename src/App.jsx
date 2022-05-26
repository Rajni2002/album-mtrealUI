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

function App() {
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
        <div>
          <Container maxWidth="sm">
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
              hrbhrbhrbrhbrhb
              rhbrhbrhrbh rbrhbrhrbhr hrbrhbrhr sbcaubcruycuybf 
              rugurygryu
            </Typography>
            <div>
              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item>
                  <Button variant="contained" color="primary">See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Secondary actions</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
