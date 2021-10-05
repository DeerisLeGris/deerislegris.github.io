//Libraries
import { Flex, Input, InputGroup, InputRightElement, Button, Image, CloseButton, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';

function TopNavbar({onSearch, onCancel, showMode, selectedFursuit}) {
    const [searchValue, setSearchValue] = useState("");
    const onInput = (event) => { 
        if(event.key === "Enter")
            onSearch(searchValue);
    };

    return(
        <Flex flexShrink={0} flexDirection="column" alignItems="stretch" justifyContent="center">
            {showMode === "search" && (
            <InputGroup>
                <Input placeholder="Search fursuit..." value={searchValue} onChange={event => setSearchValue(event.target.value)} onKeyDown={onInput}/>
                <InputRightElement width="4rem">
                    <Button h="1.75rem" size="sm" onClick={() => onSearch(searchValue)}><SearchIcon color="gray.300"/></Button>
                </InputRightElement>
            </InputGroup>
            )}

            {
                showMode === "images" && (
                <Flex flexGrow={0} flexShrink={0} flexDirection="row" alignItems="center" borderRadius="15px">
                    <Image src={selectedFursuit.avatar} height="50" borderRadius="15px"/>
                    <Flex marginLeft="10px" flexDirection="column" flexGrow={1}>
                        <Text fontWeight="bold">{selectedFursuit.name}</Text>
                        <Text fontStyle="italic">{selectedFursuit.makers[0] != null ? selectedFursuit.makers[0].name : ""}</Text>
                    </Flex>
                    <CloseButton onClick={() => onCancel()}/>
                </Flex>
                )
            }
        </Flex>
    )
}

export default TopNavbar;