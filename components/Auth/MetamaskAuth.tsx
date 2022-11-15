import { Button } from "@chakra-ui/react";
import React, { Provider, Dispatch, SetStateAction } from "react";

export default function MetamaskAuth() {
  async function loginWithMetamask() {
    const ethereum = window.ethereum;
    if (typeof ethereum === "undefined") {
      console.log("Provider is not installed!");
    } else {
      if (!ethereum.isMetaMask) {
        console.log("MetaMask is not installed!");
      } else {
        console.log("MetaMask is installed!");
      }
    }
    const user = await ethereum.request({ method: "eth_requestAccounts" });
  }
  return (
    <>
      <Button onClick={loginWithMetamask}>LOGIN</Button>
    </>
  );
}
