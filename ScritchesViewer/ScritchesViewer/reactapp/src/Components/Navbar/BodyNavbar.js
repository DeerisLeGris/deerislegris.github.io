//Libraries
import { Flex } from "@chakra-ui/react";
import { useLazyQuery, gql } from "@apollo/client";
import React, { useState, useEffect } from 'react';

const GET_FURSUITS = gql`query FursuitsTest($name: String, $maker: ID, $limit: Int!, $offset: Int!) {
    fursuits(name: $name, maker: $maker, limit: $limit, offset: $offset) {
      name
      creationYear
      avatar
    }
  }`;

function BodyNavbar({search, onCancel, showMode, currentSelection}) {
    const [getFursuits, { loading, error, data }] = useLazyQuery(GET_FURSUITS);

    useEffect(() => {
        console.log(search);

        if(search !== "") {
            getFursuits({ variables: { name: search, limit: 12, maker: "", offset: 0 } });
        }
    }, [search]);

    return(
        <Flex flexGrow={1} flexShrink={0} backgroundColor="red.500" flexDirection="column">
            {data && data.fursuits ? data.fursuits.map((fursuit) => { return(<p>{fursuit.name}</p>) }) : null}
        </Flex>
    )
}

export default BodyNavbar;