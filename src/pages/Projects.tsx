import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import kitchen from "../images/kitchen.jpg";
import salon from "../images/salon.jpg";
import satirs from "../images/satirs.jpg";

import fancytable from "../images/fancytable.jpg";
import readingarea from "../images/readingarea.jpg";
import table from "../images/table.jpg";
import readingareaa from "../images/readingareaa.jpg";
import recep from "../images/recep.jpg";
import sofa from "../images/sofa.jpg";

const Projects = () => {
  return (
    <>
      <Typography variant="h1" align="center" sx={{ mt: 2 }}>
        {" "}
        OUR PROJECTS
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            marginY: 5,
            width: 1900,
          }}
        >
          <Grid container spacing={4} sx={{ mt: 5 }}>
            <Grid xs={4} sx={{ textDecoration: "none" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${kitchen})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>
            <Grid xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${salon})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>

            <Grid xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${satirs})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>

            <Grid xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${sofa})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>
            <Grid xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${recep})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>

            <Grid xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${table})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>

            <Grid xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${readingareaa})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>
            <Grid xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${fancytable})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>
            <Grid xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "#00a152",
                    color: "#fff",
                    backgroundImage: `url(${readingarea})`,
                    backgroundSize: "cover",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: 950,
                    "&:hover": {
                      border: "1px solid #fff",
                    },
                  }}
                >
                  <Typography variant="h3" component="div" sx={{}}>
                    Project Name
                  </Typography>
                </Box>{" "}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
