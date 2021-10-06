import { Flex } from "@chakra-ui/react";
import React, { useState } from 'react';

import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

function App() {
  return (
    <Flex height="100vh" flexDirection="row" alignItems="stretch">
      <Navbar/>
      <Body/>
    </Flex>
  );
}

export default App;
