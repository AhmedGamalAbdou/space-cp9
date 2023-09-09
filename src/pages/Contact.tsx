import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import contactus from "../images/contactus.jpg";

const Contact = () => {
  return (
    <>
      <Typography variant="h1" align="center" sx={{ mt: 2 }}>
        {" "}
        Are You Ready To Love Your Space?
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img src={contactus} width="1720" height="1050" />
      </Box>

      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid xs={2}></Grid>
          <Grid xs={4}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mb: 5,
              }}
            >
              <TextField fullWidth label="Name" id="Name" sx={{ mt: 2 }} />
              <TextField
                fullWidth
                label="Phone"
                id="Phone"
                sx={{ mt: 2 }}
              />{" "}
              <TextField fullWidth label="Email" id="Email" sx={{ mt: 2 }} />
              <TextField
                id="tell"
                label="Tell us a little about your project!
                "
                multiline
                rows={4}
                fullWidth
                sx={{ mt: 2 }}
              />
              <Button
                variant="outlined"
                endIcon={<SendIcon />}
                sx={{
                  color: "#1a237e",
                  borderColor: "#1a237e",
                  mt: 2,
                }}
              >
                submit
              </Button>
            </Box>
          </Grid>

          <Grid
            xs={4}
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" align="center">
              {" "}
              Book A Free 15-Minute Discovery Call
            </Typography>{" "}
            <Typography variant="subtitle1" align="center">
              {" "}
              Let’s hop on a discovery call to chat about your project and
              answer any questions you might have about working with MCI.{" "}
            </Typography>{" "}
            <Button
              variant="outlined"
              endIcon={<SendIcon />}
              sx={{
                color: "#1a237e",
                borderColor: "#1a237e",
                mt: 2,
              }}
            >
              Book
            </Button>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
