import { FaTrash } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

type IcardItem = {
  img: string;
  title: string;
  price: string;
  amount: number;
};

function CartItem(props: IcardItem) {
  const { img, title, price, amount } = props;

  return (
    <Flex
      as="article"
      align={"center"}
      justify={"space-between"}
      w={"full"}
      gap={12}
    >
      <Image boxSize={"200px"} src={img} alt={title} fit={"cover"} />
      <Box>
        <Heading as={"h2"}>{title}</Heading>
        <Heading as={"h4"}>Rs.{price}</Heading>
        {/* remove button */}
        <Button colorScheme="red">
          <FaTrash />
        </Button>
      </Box>
      <Flex flexDir={"column"} align={"center"}>
        {/* increase count */}
        <Button colorScheme="green">
          <IoIosArrowUp />
        </Button>
        {/* amount */}
        <Text>{amount}</Text>
        {/* decrement count */}
        <Button colorScheme="gray">
          <IoIosArrowDown />
        </Button>
      </Flex>
    </Flex>
  );
}

export default CartItem;
