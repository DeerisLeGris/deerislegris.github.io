import { Flex, Divider } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { useLazyQuery, gql } from "@apollo/client";

import BodyNavbar from "./Navbar/BodyNavbar";
import TopNavbar from "./Navbar/TopNavbar";

const GET_FURSUITS = gql`query FursuitsTest($name: String, $maker: ID, $limit: Int!, $offset: Int!) {
    fursuits(name: $name, maker: $maker, limit: $limit, offset: $offset) {
      id
      slug
      name
      makers {
        name
      }
      avatar
    }
  }`;

const GET_IMAGES = gql`query FursuitMedia($fursuitId: ID!, $limit: Int!, $offset: Int!) {
    fursuitMedia(fursuitId: $fursuitId, limit: $limit, offset: $offset) {
      id
      thumbnail
    }
  }`;

function Navbar({onImageSelected}) {
    const [currentSearchValue, setCurrentSearchValue] = useState("");
    const [currentShowMode, setCurrentShowMode] = useState("search");
    const [selectedFursuit, setSelectedFursuit] = useState([]);

    const [getFursuits, { loading, error, data }] = useLazyQuery(GET_FURSUITS);
    const [getImages, { loading: loadingImages , error: errorImages, data: dataImages }] = useLazyQuery(GET_IMAGES);

    const getImagesFromId = (id, selectedFursuit) => {
        setSelectedFursuit(selectedFursuit);

        if(id != "") {
            setCurrentShowMode("images");
            getImages({ variables: { fursuitId: id, limit: 24, offset: 0 } });
        }
    };

    const goBackToSearch = () => {
        setCurrentShowMode("search");
    };

    useEffect(() => {
        //console.log(currentSearchValue);

        if(currentSearchValue !== "") {
            getFursuits({ variables: { name: currentSearchValue, limit: 12, maker: "", offset: 0 } });
        }
    }, [currentSearchValue]);

    return(
        <Flex flexGrow={0} flexShrink={0} flexBasis="500px" flexDirection="column" padding="20px" boxShadow="0px 0px 15px 5px #000000" zIndex="1">
            <TopNavbar showMode={currentShowMode} onSearch={setCurrentSearchValue} selectedFursuit={selectedFursuit} onCancel={goBackToSearch}/>
            <Divider marginTop="20px" marginBottom="20px"/>
            <BodyNavbar showMode={currentShowMode} fursuitsData={data} fursuitsDataLoading={loading} imagesData={dataImages} imagesDataLoading={loadingImages} onFursuitSelected={getImagesFromId} onImageSelected={onImageSelected}/>
        </Flex>
    )
}

export default Navbar;