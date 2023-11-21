import React from "react";

import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { FaShoppingCart, FaUser } from "react-icons/fa";

import LogoImage from "../../assets/sachin-catering-logo.png";

function Navbar() {
  return (
    <Box as="nav" w={"full"}>
      <Flex
        p={2}
        align={"center"}
        justify={"space-between"}
        bg={"gray.100"}
        top={0}
      >
        <Box boxSize="80px" cursor={"pointer"}>
          <Image
            src={LogoImage}
            alt="Sachin96boy"
            objectFit={"cover"}
            borderRadius={"10px"}
          />
        </Box>
        <HStack spacing={"16px"} align={"center"}>
          <Box>
            <Avatar bg={"purple"} icon={<FaShoppingCart />}>
              <AvatarBadge bg={"green"} boxSize={"1.6rem"} />
            </Avatar>
          </Box>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar icon={<FaUser />} />
            </MenuButton>
            <MenuList alignItems={"center"}>
              <br />
              <Center>
                <Avatar size={"2xl"} />
              </Center>
              <br />
              <Center>
                <Text>Sachin96Boy Kitchen</Text>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>
                <Button variant={"solid"} colorScheme="red" w={"full"}>
                  Logout
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
