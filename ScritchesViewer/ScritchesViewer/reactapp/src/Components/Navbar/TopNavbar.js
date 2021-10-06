//Libraries
import { Flex, Input, InputGroup, InputRightElement, Button, Image, CloseButton, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState, useCallback } from 'react';

function TopNavbar({onSearch, onCancel, showMode, selectedFursuit}) {
    const [searchValue, setSearchValue] = useState("");

    const handleKeyDown = useCallback((event) => { 
        if(event.key === "Enter")
            onSearch(searchValue);
    }, [searchValue, onSearch]);

    const handleChange = useCallback((event) => setSearchValue(event.target.value), []);

    const handleSearchButton = useCallback(() => onSearch(searchValue), [searchValue, onSearch]);

    const handleCancelButton = useCallback(() => onCancel(), [onCancel]);

    return(
        <Flex flexShrink={0} 
              flexDirection="column" 
              alignItems="stretch" 
              justifyContent="center">
            {
                showMode === "search" && (
                    <InputGroup>

                        <Input placeholder="Search fursuit..." 
                               value={searchValue} 
                               onChange={handleChange} 
                               onKeyDown={handleKeyDown}/>

                        <InputRightElement width="4rem">
                            <Button h="1.75rem" size="sm" onClick={handleSearchButton}>
                                <SearchIcon color="gray.300"/>
                            </Button>
                        </InputRightElement>

                    </InputGroup>
                )
            }

            {
                showMode === "images" && selectedFursuit && selectedFursuit.fursuit && (
                    <Flex flexGrow={0} 
                        flexShrink={0} 
                        flexDirection="row" 
                        alignItems="center" 
                        borderRadius="15px">

                        <Image src={selectedFursuit.fursuit.avatar} height="50" borderRadius="15px"/>

                        <Flex marginLeft="10px" flexDirection="column" flexGrow={1}>
                            <Text fontWeight="bold">{selectedFursuit.fursuit.name}</Text>
                            <Text fontStyle="italic">{selectedFursuit.fursuit.makers[0] != null ? selectedFursuit.fursuit.makers[0].name : ""}</Text>
                        </Flex>

                        <CloseButton onClick={handleCancelButton}/>

                    </Flex>
                )
            }
        </Flex>
    )
}

export default TopNavbar;