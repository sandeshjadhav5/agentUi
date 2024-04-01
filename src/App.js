import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div>
      <Box h="100vh" bg="#F6F7F9">   <MainRoutes /></Box>
    </div>
  );
}

export default App;
