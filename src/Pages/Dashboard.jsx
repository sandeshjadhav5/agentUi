import React from 'react'
import Navbar from '../Components/Navbar'
import TableComponent from '../Components/TableComponent'
import Filters from '../Components/Filters'


import { Box } from '@chakra-ui/react'
const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Filters/>
<TableComponent/>
    </div>
  )
}

export default Dashboard
