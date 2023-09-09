import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import stephanie from "../images/stephanie.jpg";
import alexander from "../images/alexander.jpg";
import christina from "../images/christina.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Team = () => {
  return (
    <Box sx={{ mx: 2, my: 5 }}>
      <Typography variant="h1" align="center">
        {" "}
        OUR <br />
        TEAM
      </Typography>
      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={stephanie}
                alt="stephanie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  stephanie
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I love to combine different patterns and textures to create
                  interesting and well-balanced atmospheres. Also, I like to use
                  neutral colors to generate clean and cozy environments, but at
                  the same time, I think incorporating pops of color into the
                  design can result in very beautiful spaces
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={alexander}
                alt="alexander"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  alexander
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Modern tendencies are usually what I prefer for any variety of
                  space. I love entering a room and feeling right away the
                  elegance of any modern aesthetic, without taking away its
                  practicality and coziness!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={christina}
                alt="christina"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  christina
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  My favorite design aesthetic is Midcentury Modern because it
                  incorporates natural elements like wood, plants, and light,
                  all those things are known to make people feel good, I love
                  that about interior design in general, someone can feel good
                  by the elements in a space
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Team;
