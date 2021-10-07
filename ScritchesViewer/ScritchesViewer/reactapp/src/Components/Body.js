import { Flex, Text, Spinner, Button } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import React, { useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";

const GET_IMAGE = gql`query Medium($id: ID!, $tagging: Boolean) {
    medium(id: $id, tagging: $tagging) {
      id
      picture
      createdAt
    }
  }`;

const MainView = ({viewMode, setNavbarOpen, children}) => {

    const updateNavbar = useCallback(() => setNavbarOpen(), [setNavbarOpen]);

    return(
        <Flex flexGrow={1} 
               backgroundColor="gray.600" 
               flexDirection="column"
               alignItems="stretch">

            {
                viewMode === "mobile" && (
                    <Flex flexShrink={0}
                          flexBasis="100px"
                          alignItems="center"
                          justifyContent="flex-start"
                          padding="20px">
                        
                        <Button size="lg" onClick={updateNavbar}>
                            <SearchIcon color="gray.500"/>
                        </Button>
                    </Flex>
                )
            }

            {children}
        </Flex>
    )
};

function Body({setNavbarOpen, viewMode}) {
    const {idimage} = useParams();
    const { loading, error, data } = useQuery(GET_IMAGE, { 
        variables: { id: idimage }, 
        skip: !idimage 
    });

    if(loading) {
        return(<MainView viewMode={viewMode} setNavbarOpen={setNavbarOpen}>
            <Flex flexGrow={1} 
                backgroundColor="gray.600" 
                alignItems="center" 
                justifyContent="center">

                <Spinner size="xl" color="whitesmoke"/>

            </Flex>
        </MainView>);
    }
    
    if(data && data.medium) {
        return(<MainView viewMode={viewMode} setNavbarOpen={setNavbarOpen}>
                    <Flex flexGrow={1}
                            backgroundImage={"url('" + data.medium.picture + "')"} 
                            backgroundSize="contain" backgroundPosition="center" 
                            backgroundRepeat="no-repeat" 
                            backgroundColor="gray.600"/>
               </MainView>);
    }

    return(<MainView viewMode={viewMode} setNavbarOpen={setNavbarOpen}>
        <Flex flexGrow={1} 
                 backgroundColor="gray.600" 
                 alignItems="center" 
                 justifyContent="center">

            <Text color="whitesmoke" fontSize="5xl">Scritch.es viewer !</Text>

        </Flex>
    </MainView>);

}

export default Body;