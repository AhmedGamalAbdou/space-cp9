import { Box } from "@mui/system";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Team from "../components/Team";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Services />
      <Projects />
      <Team />
    </Box>
  );
};

export default Home;
