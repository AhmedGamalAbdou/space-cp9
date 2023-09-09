import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Unstable_Grid2";
import render from "../images/render.jpg";
import concept from "../images/concept.jpg";

const Services = () => {
  return (
    <Box sx={{ mx: 2, mt: 40 }}>
      <Typography variant="h1" align="center">
        {" "}
        OUR <br />
        SERVICES
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>3D rendering</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                3D rendering for Interior Design is the process through which
                interior designers produce 3D images showcasing their design
                ideas.
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={render} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Concept Design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                We’ll work with you to turn your vision, needs, and challenges
                into a great design concept that’s uniquely suited to you now
                and into the future. Then, we’ll package everything up in an
                easy-to-understand way so you can confidently move forward with
                your project knowing your design concept stays intact. It’s an
                affordable way to get a custom modern design AND work with a
                design expert when it matters most because getting the design
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={concept} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Furniture Layout and Space planning.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                We’ll work with you to turn your vision, needs, and challenges
                into a great design concept that’s uniquely suited to you now
                and into the future. Then, we’ll package everything up in an
                easy-to-understand way so you can confidently move forward with
                your project knowing your design concept stays intact. It’s an
                affordable way to get a custom modern design AND work with a
                design expert when it matters most because getting the design
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={concept} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tile and Surface Selection and Layout.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                We’ll work with you to turn your vision, needs, and challenges
                into a great design concept that’s uniquely suited to you now
                and into the future. Then, we’ll package everything up in an
                easy-to-understand way so you can confidently move forward with
                your project knowing your design concept stays intact. It’s an
                affordable way to get a custom modern design AND work with a
                design expert when it matters most because getting the design
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={concept} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lighting Design.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                We’ll work with you to turn your vision, needs, and challenges
                into a great design concept that’s uniquely suited to you now
                and into the future. Then, we’ll package everything up in an
                easy-to-understand way so you can confidently move forward with
                your project knowing your design concept stays intact. It’s an
                affordable way to get a custom modern design AND work with a
                design expert when it matters most because getting the design
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={concept} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Exterior Finish Selections.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                We’ll work with you to turn your vision, needs, and challenges
                into a great design concept that’s uniquely suited to you now
                and into the future. Then, we’ll package everything up in an
                easy-to-understand way so you can confidently move forward with
                your project knowing your design concept stays intact. It’s an
                affordable way to get a custom modern design AND work with a
                design expert when it matters most because getting the design
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={concept} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Interior Detailing.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                We’ll work with you to turn your vision, needs, and challenges
                into a great design concept that’s uniquely suited to you now
                and into the future. Then, we’ll package everything up in an
                easy-to-understand way so you can confidently move forward with
                your project knowing your design concept stays intact. It’s an
                affordable way to get a custom modern design AND work with a
                design expert when it matters most because getting the design
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={concept} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Full-Service Interior Design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                We’ll work with you to turn your vision, needs, and challenges
                into a great design concept that’s uniquely suited to you now
                and into the future. Then, we’ll package everything up in an
                easy-to-understand way so you can confidently move forward with
                your project knowing your design concept stays intact. It’s an
                affordable way to get a custom modern design AND work with a
                design expert when it matters most because getting the design
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={concept} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Color and Paint Selection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  alignItems: "center",
                }}
              >
                We’ll work with you to turn your vision, needs, and challenges
                into a great design concept that’s uniquely suited to you now
                and into the future. Then, we’ll package everything up in an
                easy-to-understand way so you can confidently move forward with
                your project knowing your design concept stays intact. It’s an
                affordable way to get a custom modern design AND work with a
                design expert when it matters most because getting the design
              </Typography>{" "}
            </Grid>
            <Grid xs={6}>
              {" "}
              <img src={concept} width="630" height="420" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Services;
