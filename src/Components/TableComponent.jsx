import React from 'react';
import { Box } from '@chakra-ui/react';

const TableComponent = () => {
  // Sample data array
  const data = [
    { id: '8457rt9393', name: 'Vedanth', location: 'Bangalore', shortlist: 155, viewed: 999, interest: 2876 },
    { id: '8457rt9393', name: 'Vedanth', location: 'Bangalore', shortlist: 155, viewed: 999, interest: 2876 },
  
    { id: '8457rt9393', name: 'Vedanth', location: 'Bangalore', shortlist: 155, viewed: 999, interest: 2876 },
  
    { id: '8457rt9393', name: 'Vedanth', location: 'Bangalore', shortlist: 155, viewed: 999, interest: 2876 },
  
    { id: '8457rt9393', name: 'Vedanth', location: 'Bangalore', shortlist: 155, viewed: 999, interest: 2876 },
  
    
  
  ];

  return (
    <Box ml="16" mr="16" bg="#F0F0F0" borderRadius="10px" p="8">
      <Box borderColor="#CCCCCC" mb="2">
        <Box display="flex" fontWeight="bold" color="#FF8888" justifyContent="space-around" pb="2">
          <Box flex="1" textAlign="center">Property ID</Box>
          <Box flex="1" textAlign="center">Property Name</Box>
          <Box flex="1" textAlign="center">Location</Box>
          <Box flex="1" textAlign="center">Shortlist</Box>
          <Box flex="1" textAlign="center">Viewed</Box>
          <Box flex="1" textAlign="center">Interest</Box>
        </Box>
      </Box>

      {data.map((item, index) => (
        <Box key={index} borderColor="#CCCCCC" mb="3">
          <Box display="flex"  justifyContent="space-around" alignItems="center" p="4" bg="white" borderRadius="10px">
            <Box color="#3330DD"  textDecoration="underline"  flex="1" textAlign="center">{item.id}</Box>
            <Box flex="1" textAlign="center">{item.name}</Box>
            <Box flex="1" textAlign="center">{item.location}</Box>
            <Box flex="1" textAlign="center">{item.shortlist}</Box>
            <Box flex="1" textAlign="center">{item.viewed}</Box>
            <Box flex="1" textAlign="center">{item.interest}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TableComponent;
