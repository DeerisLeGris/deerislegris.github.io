import { Flex, Text } from "@chakra-ui/react";
import { useLazyQuery, gql } from "@apollo/client";
import React, { useEffect } from 'react';

const GET_IMAGE = gql`query Medium($id: ID!, $tagging: Boolean) {
    medium(id: $id, tagging: $tagging) {
      id
      picture
      createdAt
    }
  }`;

function Body({id}) {
    const [getImage, { loading, error, data }] = useLazyQuery(GET_IMAGE);

    useEffect(() => {
        //console.log(currentSearchValue);
    
        if(id !== "") {
            getImage({ variables: { id: id } });
        }
    }, [id]);

    if(data && data.medium) {
        return(<Flex flexGrow={1} backgroundImage={"url('" + data.medium.picture + "')"} backgroundSize="contain" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundColor="gray.600"/>);
    }

    return(<Flex flexGrow={1} backgroundColor="gray.600" alignItems="center" justifyContent="center">
        <Text color="whitesmoke" fontSize="5xl">Scritch.es viewer</Text>
    </Flex>);

}

export default Body;