import Box from "@mui/material/Box";

import bathroom from "../images/bathroom.jpg";
import books from "../images/books.jpg";
import bigrece from "../images/bigrece.jpg";
import light from "../images/light.jpg";
import AspectRatio from "@mui/joy/AspectRatio";

import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";

const Projects = () => {
  return (
    <Box sx={{ mx: 2 }}>
      <Typography variant="h1" align="center">
        {" "}
        OUR <br />
        PROJECTS
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid xs={6} md={8}>
            <Box>
              <AspectRatio objectFit="fill">
                <img src={books} width="100%" height="600" />
              </AspectRatio>
            </Box>
          </Grid>
          <Grid xs={6} md={4}>
            <AspectRatio objectFit="initial">
              <img src={bathroom} width="100%" />
            </AspectRatio>
          </Grid>
          <Grid xs={6} md={4}>
            <AspectRatio objectFit="fill">
              <img src={light} width="100%" height="600" />
            </AspectRatio>
          </Grid>
          <Grid xs={6} md={8}>
            <AspectRatio objectFit="scaleDown">
              <img src={bigrece} width="100%" height="600" />
            </AspectRatio>
          </Grid>
        </Grid>
      </Box>
      ;
    </Box>
  );
};

export default Projects;
