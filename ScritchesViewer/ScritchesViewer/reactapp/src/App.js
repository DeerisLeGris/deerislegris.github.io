import { Flex } from "@chakra-ui/react";
import React, { useState } from 'react';

import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

function App() {
  const [currentImage, setCurrentImage] = useState("");

  return (
    <Flex height="100vh" flexDirection="row" alignItems="stretch">
      <Navbar onImageSelected={setCurrentImage}/>
      <Body id={currentImage}/>
    </Flex>
  );
}

export default App;
