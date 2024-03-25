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

<Flex
      w={"full"}
      h={"80vh"}
      backgroundImage={
        "url(https://gnbsgy.org/wp-content/uploads/2020/05/QM0819-CLMN-Quality101B-calibration.jpg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={8}>
          <Text
            color={"white"}
            fontWeight={800}
            lineHeight={1.2}
            fontFamily="Raleway"
            fontSize={useBreakpointValue({ base: "5xl", md: "7xl" })}
            
          >
            Online Caliberation
          </Text>
          <Stack direction={"row"}>
            <Link to="/selectscope">
              {" "}
              <Button
                bg={"whiteAlpha.500"}
                rounded={"full"}
                color={"black"}
                w={"80"}
                _hover={{ bg: "whiteAlpha.800" }}
                data-aos="fade-right"
              >
                Get Started
              </Button>
            </Link>
          
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    </Box>

  );
}
