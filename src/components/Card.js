import {
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="#fff" borderRadius="lg" color="black">
      <Image src={imageSrc} alt={title} borderRadius="lg" objectFit="cover" />
      <Stack spacing="2" ml="3" my="3">
        <Heading size="md">{title}</Heading>
        <Text color="blue.700">{description}</Text>
        <HStack>
          <Link fontSize="sm" variant="ghost" colorScheme="blue" isExternal>
            See More
          </Link>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Stack>
    </VStack>
  );
};

export default Card;
