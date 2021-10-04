import { Flex } from "@chakra-ui/react";
import {
  useQuery,
  gql
} from "@apollo/client";

import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

const GET_FURSUITS = gql`query FursuitsTest($name: String, $maker: ID, $limit: Int!, $offset: Int!) {
  fursuits(name: $name, maker: $maker, limit: $limit, offset: $offset) {
    name
    creationYear
    avatar
  }
}`;

function App() {
  const { loading, error, data } = useQuery(GET_FURSUITS, { variables: { name: "Fuzzer", limit: 12, maker: "", offset: 0 } });
  
  return (
    <Flex height="100vh" flexDirection="row" alignItems="stretch">
      <Navbar/>
      <Body/>
    </Flex>
  );
}

export default App;
