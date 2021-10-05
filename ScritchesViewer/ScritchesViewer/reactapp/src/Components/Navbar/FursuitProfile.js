//Libraries
import { Flex, Image } from "@chakra-ui/react";
import styled from 'styled-components';

const FursuitName = styled.h1`
    font-size: 1.8em;
    margin: 0;
    font-weight: bolder;
    line-height: normal;
`;

const Maker = styled.h2`
    font-size: 1.2em;
    margin: 0;
    font-style: italic;
`;

function FursuitProfile({name, image, maker, onClick}) {
    return(
        <Flex flexGrow={0} flexShrink={0} flexBasis="150px" backgroundColor="red.400" flexDirection="row" alignItems="center" padding="10px" borderRadius="15px" backgroundColor="lightgray" onClick={onClick} cursor="pointer">
            <Image src={image} height="100" borderRadius="15px"/>
            <Flex marginLeft="10px" flexDirection="column">
                <FursuitName>{name}</FursuitName>
                <Maker>{maker}</Maker>
            </Flex>
        </Flex>
    )
}

export default FursuitProfile;