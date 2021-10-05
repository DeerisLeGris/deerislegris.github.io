//Libraries
import { Flex, Image, Text } from "@chakra-ui/react";

function FursuitProfile({name, image, maker, onClick}) {
    return(
        <Flex flexGrow={0} 
              flexShrink={0} 
              flexBasis="150px" 
              backgroundColor="red.400" 
              flexDirection="row" 
              alignItems="center" 
              padding="10px" 
              borderRadius="15px" 
              backgroundColor="lightgray" 
              onClick={onClick} 
              cursor="pointer">

            <Image src={image} height="100" borderRadius="15px"/>
            
            <Flex marginLeft="10px" flexDirection="column">
                <Text fontSize="1.8em" fontWeight="bold" lineHeight="1">{name}</Text>
                <Text fontSize="1.2em" fontStyle="italic">{maker}</Text>
            </Flex>

        </Flex>
    )
}

export default FursuitProfile;