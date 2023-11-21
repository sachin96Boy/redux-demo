import { Box } from "@chakra-ui/react";

import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/body/CartContainer";

function App() {
  return (
    <Box w={"full"}>
      <Navbar />
      <CartContainer />
    </Box>
  );
}

export default App;
