import { Flex, Text } from "@chakra-ui/react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

const GET_IMAGE = gql`query Medium($id: ID!, $tagging: Boolean) {
    medium(id: $id, tagging: $tagging) {
      id
      picture
      createdAt
    }
  }`;

function Body() {
    const {idimage} = useParams();
    const { loading, error, data } = useQuery(GET_IMAGE, { 
        variables: { id: idimage }, 
        skip: !idimage 
    });

    if(data && data.medium) {
        return(<Flex flexGrow={1} 
                     backgroundImage={"url('" + data.medium.picture + "')"} 
                     backgroundSize="contain" backgroundPosition="center" 
                     backgroundRepeat="no-repeat" 
                     backgroundColor="gray.600"/>);
    }

    return(<Flex flexGrow={1} 
                 backgroundColor="gray.600" 
                 alignItems="center" 
                 justifyContent="center">

        <Text color="whitesmoke" fontSize="5xl">Scritch.es viewer</Text>

    </Flex>);

}

export default Body;