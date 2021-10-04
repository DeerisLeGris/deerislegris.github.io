//Libraries
import { Flex, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';

function TopNavbar({onSearch, onCancel, showMode, currentSelection}) {
    const [searchValue, setSearchValue] = useState("");
    const onInput = (event) => { 
        if(event.key === "Enter")
            onSearch(searchValue);
    };

    return(
        <Flex flexShrink={0} flexDirection="column" alignItems="stretch" justifyContent="center">
            {showMode === "search" && (
            <InputGroup>
                <Input placeholder="Search fursuit..." onChange={event => setSearchValue(event.target.value)} onKeyDown={onInput}/>
                <InputRightElement width="4rem">
                    <Button h="1.75rem" size="sm" onClick={() => onSearch(searchValue)}><SearchIcon color="gray.300"/></Button>
                </InputRightElement>
            </InputGroup>
            )}
        </Flex>
    )
}

export default TopNavbar;