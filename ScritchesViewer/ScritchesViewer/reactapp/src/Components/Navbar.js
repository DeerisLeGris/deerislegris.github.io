import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';

import BodyNavbar from "./Navbar/BodyNavbar";
import TopNavbar from "./Navbar/TopNavbar";

function Navbar({onImageSelected}) {
    const [currentSearchValue, setCurrentSearchValue] = useState("");
    const [currentShowMode, setCurrentShowMode] = useState("search");

    return(
        <Flex flexGrow={0} flexShrink={0} flexBasis="500px" backgroundColor="red" flexDirection="column" padding="20px">
            <TopNavbar showMode={currentShowMode} onSearch={setCurrentSearchValue}/>
            <BodyNavbar search={currentSearchValue}/>
        </Flex>
    )
}

export default Navbar;