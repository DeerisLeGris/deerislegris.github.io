import { Flex, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, DrawerHeader } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, gql } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";


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

const GET_SELECTEDFURSUIT = gql`query SelectedFursuit($id: ID!, $isModerator: Boolean) {
    fursuit(id: $id, isModerator: $isModerator) {
      id
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

function Navbar({isNavbarOpen, setNavbarOpen, viewMode}) {
    const [currentSearchValue, setCurrentSearchValue] = useState("");
    const [currentShowMode, setCurrentShowMode] = useState("search");

    const {idfursuit} = useParams();
    const history = useHistory();

    const { loading, error, data } = useQuery(GET_FURSUITS, { 
      variables: { name: currentSearchValue, limit: 12, maker: "", offset: 0 },
      skip: !currentSearchValue 
    });

    const { data: selectedFursuitData } = useQuery(GET_SELECTEDFURSUIT, { 
      variables: { id: idfursuit }, 
      skip: !idfursuit 
    });

    const { loading: loadingImages , error: errorImages, data: dataImages } = useQuery(GET_IMAGES, { 
      variables: { fursuitId: idfursuit, limit: 24, offset: 0 }, 
      skip: !idfursuit 
    });

    const getImagesFromId = useCallback((id) => {
        if(id)
          history.push("/" + id);
    }, []);

    const getImageFromId = useCallback((id) => {
      if(id) {
        history.push("/" + idfursuit + "/" + id);

        if(viewMode === "mobile") {
          setNavbarOpen();
        }
      }
        
    }, [idfursuit, viewMode, setNavbarOpen]);

    const goBackToSearch = useCallback(() => {
        setCurrentShowMode("search");
    }, []);

    useEffect(() => {
      if(idfursuit) {
        setCurrentShowMode("images");
      }
    }, [idfursuit]);

    if(viewMode === "mobile") {
      return(
        <Drawer isOpen={isNavbarOpen}
                placement="left"
                onClose={() => setNavbarOpen()}
                size="full" >
          
          <DrawerOverlay/>
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader borderBottomWidth="1px">Scritch.es viewer</DrawerHeader>

            <DrawerBody paddingTop="20px">
              <TopNavbar showMode={currentShowMode} 
                          onSearch={setCurrentSearchValue} 
                          selectedFursuit={selectedFursuitData} 
                          onCancel={goBackToSearch}/>

              <Divider marginTop="20px" marginBottom="20px"/>

              <BodyNavbar showMode={currentShowMode} 
                          fursuitsData={data} 
                          fursuitsDataLoading={loading} 
                          imagesData={dataImages} 
                          imagesDataLoading={loadingImages} 
                          onFursuitSelected={getImagesFromId} 
                          onImageSelected={getImageFromId}/>
            </DrawerBody>
          </DrawerContent>

        </Drawer>
      );
    }

    return(
        <Flex flexGrow={0} 
              flexShrink={0} 
              flexBasis="500px" 
              flexDirection="column" 
              padding="20px" 
              boxShadow="0px 0px 15px 5px #000000" 
              zIndex="1">

            <TopNavbar showMode={currentShowMode} 
                       onSearch={setCurrentSearchValue} 
                       selectedFursuit={selectedFursuitData} 
                       onCancel={goBackToSearch}/>

            <Divider marginTop="20px" marginBottom="20px"/>

            <BodyNavbar showMode={currentShowMode} 
                        fursuitsData={data} 
                        fursuitsDataLoading={loading} 
                        imagesData={dataImages} 
                        imagesDataLoading={loadingImages} 
                        onFursuitSelected={getImagesFromId} 
                        onImageSelected={getImageFromId}/>

        </Flex>
    )
}

export default Navbar;