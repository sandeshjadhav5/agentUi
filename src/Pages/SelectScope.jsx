import React,{useEffect} from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,Select,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

const Form1 = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
         Select Scope
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
              Project name
            </FormLabel>
            <Input id="first-name" placeholder="First name" />
          </FormControl>
  
        
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={'normal'}>
         Select Scope
          </FormLabel>
          <Select placeholder='Select option'>
  <option value='option1'>Mechanical</option>
  <option value='option2'>Electrical</option>
  <option value='option3'>Electronics</option>
</Select>
          <FormHelperText>please select the scope for testing</FormHelperText>
        </FormControl>
      </>
    )
  }

  const Form2 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Select Sensor
        </Heading>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="country"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            List of Sensors
          </FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md">
            <option>Pressure sensor</option>
            <option>Proximity sensor</option>
            <option>Color sensor</option>
            <option>MEMS</option>
            <option>Magnetic sensors</option>
          </Select>
        </FormControl>

      </>
    )
  }


  const Form3 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          Enter Your Readings
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
        <FormControl mr="5%">
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Zero Reading
            </FormLabel>
            <Input placeholder="Zero Reading" />
          </FormControl>
          <FormControl mr="5%">
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Full-Scale Reading
            </FormLabel>
            <Input placeholder="Full-Scale Reading" />
          </FormControl>
          <FormControl mr="5%">
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Intermediate Reading
            </FormLabel>
            <Input placeholder="Intermediate Reading" />
          </FormControl>
          <FormControl mr="5%">
            <FormLabel htmlFor="Hysteresis Reading" fontWeight={'normal'}>
            Hysteresis Reading
            </FormLabel>
            <Input placeholder="Hysteresis Reading" />
          </FormControl>
        </SimpleGrid>
      </>
    )
  }
  
const SelectScope = () => {

    const toast = useToast()
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br/>
      <br/>
      <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Readings Submitted.',
                    description: "We've taken your readings,redirecting to Results Page",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default SelectScope;
