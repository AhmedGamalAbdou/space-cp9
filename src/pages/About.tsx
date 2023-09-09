import { Box } from "@mui/material";

import Typography from "@mui/material/Typography";
import meetourteam from "../images/meetourteam.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import team from "../images/team.jpg";
import Team from "../components/Team";

const About = () => {
  return (
    <Box sx={{ mx: 2, mt: 5, display: "flex", flexDirection: "column" }}>
      <Typography variant="h1" align="center">
        {" "}
        Meet SPACE cp9 interiors
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img src={meetourteam} width="1920" height="950" />
      </Box>

      <Box
        sx={{
          mt: 5,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid xs={7}>
            <Typography align="center" variant="h6">
              {" "}
              For over a decade, SPACE cp9 interiors has gained recognition for
              our innovative and visionary approach to design, driving the
              industry towards greater creativity, inclusivity, and
              sustainability. At MCI, we customize our interior design services
              to meet your specific requirements, creating spaces that are both
              relevant and long-lasting, regardless of the project scale. With a
              team composed of individuals hailing from various corners of the
              globe, the MCI staff brings together a wealth of diverse
              backgrounds and perspectives, resulting in captivating and
              distinctly unconventional designs. Our design endeavors encompass
              a wide range of settings, including private homes, multi-family
              buildings, office spaces, restaurants, retail establishments, and
              wellness facilities. We particularly excel in projects involving
              mixed-use and repurposed spaces. Our team possesses the necessary
              resources, flexibility, and expertise to undertake projects not
              only in Arizona but across North America.
            </Typography>
          </Grid>
          <Grid
            xs={4}
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "flex-end",
            }}
          >
            <img src={team} width="630" height="420" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 5 }}>
        <Team />
      </Box>
    </Box>
  );
};

export default About;
