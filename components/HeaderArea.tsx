import React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { useWallet } from "../hooks";

import MetamaskAuth from "./Auth/MetamaskAuth";

export default function HeaderArea() {
  const user = useWallet().getAccount;
  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <Flex alignItems={"center"}>
        <MetamaskAuth />
      </Flex>
    </HStack>
  );
}
