import { Heading } from "@chakra-ui/react";
import { Button, Box, Container, Text } from "@chakra-ui/react";
import { Children, useState } from "react";
import BodyArea from "../components/BodyArea";
import FooterArea from "../components/FooterArea";
import SidebarArea from "../components/SidebarArea";

export default function test() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <SidebarArea children={[<BodyArea />]} />
        <Box zIndex={100}>
          <FooterArea />
        </Box>
      </Box>
    </>
  );
}
