import { useEffect } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box>


    </Box>

  );
}
