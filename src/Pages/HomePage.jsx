import React,{useEffect} from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import { Box } from "@chakra-ui/react";
const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Box  data-aos="fade-up">  <HeroSection /></Box>
      <Footer />
    </div>
  );
};

export default HomePage;
