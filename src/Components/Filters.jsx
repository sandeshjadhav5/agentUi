import React from 'react';
import { Box, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoFilterSharp } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';

const Filters = () => {
  return (
    <Box ml="16" mr="16" mt="8" mb="8">
      <Box display="flex" justifyContent="space-between">
        <Input bg="white" w="30" h="6" />
        <Box display="flex"  fontSize="sm">
          Total Views <span style={{ color: '#EC1B26' }}>(766)</span><RiArrowDropDownLine />
        </Box>
        <Box display="flex" fontSize="sm">City <RiArrowDropDownLine /></Box>
        <Box display="flex"  fontSize="sm">Buy/Rent <RiArrowDropDownLine /></Box>
        <Box display="flex"  fontSize="sm">Residential <span style={{ color: '#EC1B26' }}>(343)</span><RiArrowDropDownLine /></Box>
        <Box display="flex"  fontSize="sm">Commercial <span style={{ color: '#EC1B26' }}>(423)</span><RiArrowDropDownLine /></Box>
        <Box display="flex"  fontSize="sm">Total Demographic Views <span style={{ color: '#EC1B26' }}>(766)</span><RiArrowDropDownLine /></Box>
        <Box display="flex" color="#EC1B26" fontSize="sm">Filters  <IoFilterSharp /></Box>
        <Box fontSize="sm"><SlCalender color="#EC1B26" /></Box>
      </Box>
    </Box>
  );
};

export default Filters;
