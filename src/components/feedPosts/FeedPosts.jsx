import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => {
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"2009px"}></Skeleton>
                <Skeleton height={"10px"} w={"2009px"}></Skeleton>
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}></Box>
            </Skeleton>
          </VStack>;
        })}
      {!isLoading && (
        <>
          <FeedPost img="./img4.jpg" username="Keerthy" avatar="./img4.jpg" />
          <FeedPost img="./img1.jpg" username="Reha" avatar="./img1.jpg" />
          <FeedPost img="./img2.jpg" username="Rina" avatar="./img2.jpg" />
          <FeedPost img="./img3.jpg" username="Nisha" avatar="./img3.jpg" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
