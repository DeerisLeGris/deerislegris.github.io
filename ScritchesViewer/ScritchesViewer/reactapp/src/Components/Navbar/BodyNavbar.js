//Libraries
import { Flex, Skeleton, Image } from "@chakra-ui/react";

import FursuitProfile from "./FursuitProfile";

//Component with generated skeletons (between 1 and 11)
const Skeletons = () => {
    return Array.from(Array(1 + Math.floor(Math.random() * 10)).keys()).map((i) => (
        <Skeleton key={i} borderRadius="15px" height="150px"/>
    ));
}


function BodyNavbar({fursuitsData, fursuitsDataLoading, onFursuitSelected, imagesData, imagesDataLoading, onImageSelected, showMode}) {

    //Loading skeletons
    if((showMode === "images" && imagesDataLoading) || (showMode === "search" && fursuitsDataLoading))
        return(
        <Flex flexDirection="column" overflow="auto" gridGap="10px">
            <Skeletons/>
        </Flex>
        )

    //Show results (searchs results OR images results)
    switch(showMode) {
        case "search":
            return(
                <Flex flexDirection="column" overflow="auto" gridGap="10px">
                    {
                        fursuitsData && fursuitsData.fursuits && fursuitsData.fursuits.map((fursuit) => (
                            <FursuitProfile key={fursuit.id} 
                                            onClick={() => onFursuitSelected(fursuit.slug)} 
                                            name={fursuit.name} 
                                            image={fursuit.avatar} 
                                            maker={fursuit.makers[0] != null ? fursuit.makers[0].name : ""}
                            />
                        ))
                    }
                </Flex>
            );
            break;

        case "images":
            return(
                <Flex flexDirection="column" overflow="auto" gridGap="10px">
                    {
                        imagesData && imagesData.fursuitMedia && imagesData.fursuitMedia.map((image) => (
                            <Image  key={image.id} 
                                    src={image.thumbnail} 
                                    onClick={() => onImageSelected(image.id)} 
                                    cursor="pointer"
                            />
                        ))
                    }
                </Flex>
            );
            break;
    }

}

export default BodyNavbar;