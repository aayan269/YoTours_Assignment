import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";


export const Navbar = () => {
  
  return (
    <Box w="100%" bg={"#3182CE"} color="white" h="80px">
      <Flex
        w={"90%"}
        m="auto"
        alignItems={"center"}
        h="100%"
        justifyContent={"space-between"}
      >
        <Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"red"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            Y
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"orange"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            O
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"green"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            T
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"blue"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            O
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"black"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            U
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"teal"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            R
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"darkviolet"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            S
          </Flex>
       
        
        </Flex>

        <Flex gap={5} alignItems="center">
          
          <Text fontSize={"20"} textTransform="capitalize">
           Welcome To Our Auto MaskAccountNumber System
          </Text>
         
        </Flex>
      </Flex>
    </Box>
  );
};
