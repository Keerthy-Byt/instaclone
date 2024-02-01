import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"gray.400"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="Neha" followers={365} avatar={"avatar1.png"} />
      <SuggestedUser name="Nico" followers={281} avatar={"avatar2.png"} />
      <SuggestedUser name="Resha" followers={40} avatar={"avatar3.png"} />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"self-start"}>
        © built by{" "}
        <Link
          href="https://github.com/Keerthy-Byt"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Keerthy
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
