//Libraries
import { Flex, Skeleton } from "@chakra-ui/react";

import FursuitProfile from "./FursuitProfile";


function BodyNavbar({fursuitsData, fursuitsDataLoading, onCancel, showMode, currentSelection}) {

    return(
        <Flex flexDirection="column" overflow="auto" gridGap="10px">
            {
            showMode === "search" && fursuitsData && fursuitsData.fursuits ? fursuitsData.fursuits.map((fursuit) => { return(<FursuitProfile key={fursuit.id} name={fursuit.name} image={fursuit.avatar} maker={fursuit.makers[0].name}/>) }) : null

            || fursuitsDataLoading && (<><Skeleton height="150px"/><Skeleton height="150px"/><Skeleton height="150px"/></>)
            }
        </Flex>
    )
}

export default BodyNavbar;