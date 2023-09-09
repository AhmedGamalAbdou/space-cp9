import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import spacejoy from "../images/spacejoy.jpg";
import chair from "../images/chair.jpg";
import texture from "../images/texture.jpg";
import happyf from "../images/happyf.jpg";

const Hero = () => {
  return (
    <Box sx={{ mx: 2 }}>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          color: "#000",
        }}
      >
        <Box
          sx={{
            color: "#263238",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"first second  third  third"
      "firstb secondb thirdb fourthb"
      `,
          }}
        >
          <Box sx={{ gridArea: "first" }} textAlign="center">
            <Typography
              variant="h1"
              component="div"
              sx={{ textAlign: "center" }}
            >
              SPACE <br />
              cp9
            </Typography>
            <Button
              variant="outlined"
              endIcon={<SendIcon />}
              sx={{ color: "#1a237e", borderColor: "#1a237e", mt: 5 }}
            >
              See our projects
            </Button>
          </Box>
          <Box sx={{ gridArea: "second" }}>
            <Typography variant="h1" component="div">
              TRANSFORM. YOUR SPACE
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: "#455a64" }}
              align="center"
            >
              space cp9 was founded in 2018 in Cairo, Egypt. We have since then
              expanded into a full service interior design and furniture design
              studio servicing clients across Egypt. We are more than simply
              interior designers. space i9 is an extension of an interior design
              success team. We consider ourselves resourceful collaborators who
              connect with our clients to grow each project together.
            </Typography>
          </Box>
          <Box sx={{ gridArea: "third" }}>
            <img src={spacejoy} width="100%" height="400" />
          </Box>

          <Box sx={{ gridArea: "firstb" }}>
            <img src={chair} width="100%" height="400" />
          </Box>
          <Box sx={{ gridArea: "secondb", bgcolor: "#fff" }} textAlign="center">
            <img src={texture} width="100%" height="400" />
          </Box>
          <Box sx={{ gridArea: "thirdb", bgcolor: "#fff" }} textAlign="center">
            <Typography variant="h3">
              keep you in the know about the latest design trends
            </Typography>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={{ width: "300px" }}
            />
            <br />
            <Button
              variant="outlined"
              endIcon={<SendIcon />}
              sx={{ color: "#1a237e", borderColor: "#1a237e", mt: 5 }}
            >
              Sign up
            </Button>
          </Box>
          <Box
            sx={{
              gridArea: "fourthb",
              bgcolor: "#00a152",
              color: "#fff",
              backgroundImage: `url(${happyf})`,
              backgroundSize: "cover",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" component="div">
              326
            </Typography>

            <Typography variant="h4" gutterBottom>
              happy families
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
