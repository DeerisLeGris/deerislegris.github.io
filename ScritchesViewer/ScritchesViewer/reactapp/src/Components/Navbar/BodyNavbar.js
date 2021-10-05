//Libraries
import { Flex, Skeleton, Image } from "@chakra-ui/react";

import FursuitProfile from "./FursuitProfile";


function BodyNavbar({fursuitsData, fursuitsDataLoading, onFursuitSelected, imagesData, imagesDataLoading, onCancel, showMode, currentSelection}) {

    return(
        <Flex flexDirection="column" overflow="auto" gridGap="10px">
            {
            showMode === "search" && fursuitsData && fursuitsData.fursuits ? fursuitsData.fursuits.map((fursuit) => { return(<FursuitProfile key={fursuit.id} onClick={() => onFursuitSelected(fursuit.slug, fursuit)} name={fursuit.name} image={fursuit.avatar} maker={fursuit.makers[0] != null ? fursuit.makers[0].name : ""}/>) }) : null

            || showMode === "search" && fursuitsDataLoading && (<><Skeleton height="150px"/><Skeleton height="150px"/><Skeleton height="150px"/></>)
            }

            {
                showMode === "images" && imagesData && imagesData.fursuitMedia ? imagesData.fursuitMedia.map((image) => { return(<Image key={image.id} src={image.thumbnail}/>) }) : null

                || showMode === "images" && imagesDataLoading && (<><Skeleton height="150px"/><Skeleton height="150px"/><Skeleton height="150px"/></>)
            }
        </Flex>
    )
}

export default BodyNavbar;