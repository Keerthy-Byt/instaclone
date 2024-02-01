import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Keerthy" size={"md"} src="./img4.jpg" />
        <Text fontSize={12} fontWeight={"bold"}>
          Keerthy
        </Text>
      </Flex>
      <Link
        to={"/auth"}
        as={RouterLink}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textdecoration: "none" }}
        cursor={"pointer"}
      >
        Log Out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
