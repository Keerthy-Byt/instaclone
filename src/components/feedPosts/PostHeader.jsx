import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} my={2}>
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={2}
        width={"full"}
      >
        <Avatar src={avatar} alt={username} size={"sm"} />
        <Flex fontWeight={"bold"} fontSize={12} gap={2}>
          {username}
          <Box color={"gray.500"}>• 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          color={"blue.500"}
          fontSize={12}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
