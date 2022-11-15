import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import MetamaskAuth from "./Auth/MetamaskAuth";

export default function BodyArea() {
  const [user, setUser] = useState<string>("");

  return (
    <>
      <MetamaskAuth setUser={setUser} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box w={256} h={256} bgColor={"red.300"} />
        <Box w={256} h={256} bgColor={"blue.300"} />
        <Box w={256} h={256} bgColor={"red.300"} />
        <Box w={256} h={256} bgColor={"blue.300"} />
        <Box w={256} h={256} bgColor={"red.300"} />
        <Box w={256} h={256} bgColor={"blue.300"} />
        <Box w={256} h={256} bgColor={"red.300"} />
        <Box w={256} h={256} bgColor={"blue.300"} />
        <Box w={256} h={256} bgColor={"red.300"} />
      </Grid>
    </>
  );
}
