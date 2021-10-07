import { Flex } from "@chakra-ui/react";
import React, { useState, useCallback } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

function App() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = useCallback(() => setNavbarOpen(!isNavbarOpen), [isNavbarOpen]);

  const currentViewMode = useBreakpointValue({ base: "mobile", xl: "pc" })

  return (
    <Flex height="100vh" flexDirection="row" alignItems="stretch">
      <Navbar isNavbarOpen={isNavbarOpen} setNavbarOpen={toggleNavbar} viewMode={currentViewMode}/>
      <Body setNavbarOpen={toggleNavbar} viewMode={currentViewMode}/>
    </Flex>
  );
}

export default App;
