import { useSelector } from "react-redux";
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";

import { RootState } from "../../store/store";

import CartItem from "./CartItem";

function CartContainer() {
  const { cartItems, total, amount } = useSelector(
    (state: RootState) => state.cart
  );

  if (amount < 1) {
    return (
      <Box>
        <Center>
          <header>
            <Heading as={"h2"} size={"3xl"}>
              Your Bag
            </Heading>
            <Heading as={"h4"} size={"md"}>
              Is currently Emptyg
            </Heading>
          </header>
        </Center>
      </Box>
    );
  }

  return (
    <Flex flexDir={"column"} align={"center"} w={"full"}>
      {/* cart header */}
      <header>
        <Heading as={"h2"} size={"3xl"}>
          Your Bag
        </Heading>
      </header>
      {/* cart items list map */}
      <Box>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </Box>
      {/* cart footer */}
      <Flex flexDir={"column"} as="footer" w={"full"} align={"center"}>
        <Box w={"full"}>
          <hr />
        </Box>
        <Box>
          <Heading>
            Total <span>RS.{total}</span>
          </Heading>
        </Box>
        <Button variant={"solid"} colorScheme={"blue"}>
          Clear Cart
        </Button>
      </Flex>
    </Flex>
  );
}

export default CartContainer;
