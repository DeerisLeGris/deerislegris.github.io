import { Flex, Divider } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { useLazyQuery, gql } from "@apollo/client";

import BodyNavbar from "./Navbar/BodyNavbar";
import TopNavbar from "./Navbar/TopNavbar";

const GET_FURSUITS = gql`query FursuitsTest($name: String, $maker: ID, $limit: Int!, $offset: Int!) {
    fursuits(name: $name, maker: $maker, limit: $limit, offset: $offset) {
      id
      name
      makers {
        name
      }
      avatar
    }
  }`;

function Navbar({onImageSelected}) {
    const [currentSearchValue, setCurrentSearchValue] = useState("");
    const [currentShowMode, setCurrentShowMode] = useState("search");
    const [getFursuits, { loading, error, data }] = useLazyQuery(GET_FURSUITS);

    useEffect(() => {
        //console.log(currentSearchValue);

        if(currentSearchValue !== "") {
            getFursuits({ variables: { name: currentSearchValue, limit: 12, maker: "", offset: 0 } });
        }
    }, [currentSearchValue]);

    return(
        <Flex flexGrow={0} flexShrink={0} flexBasis="500px" flexDirection="column" padding="20px">
            <TopNavbar showMode={currentShowMode} onSearch={setCurrentSearchValue}/>
            <Divider marginTop="20px" marginBottom="20px"/>
            <BodyNavbar showMode={currentShowMode} fursuitsData={data} fursuitsDataLoading={loading}/>
        </Flex>
    )
}

export default Navbar;