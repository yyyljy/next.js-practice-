import { NextPage } from "next";
import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWallet, useWeb3 } from "../hooks";

const Home: NextPage = () => {
  const [treeCount, setTreeCount] = useState<string>("");

  const { account, getAccount } = useWallet();
  const { web3, elgTreeContract } = useWeb3();

  const onClickNftCount = async () => {
    try {
      const response = await elgTreeContract.methods.balanceOf(account).call();
      setTreeCount(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickMintTree = async () => {
    try {
      const response = await elgTreeContract.methods
        .mintTree()
        .send({ from: account });

      if (response.status) {
        alert("민팅 성공");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => console.log(elgTreeContract), [elgTreeContract]);

  return (
    <Box>
      <Text>나의 NFT : {treeCount}</Text>
      <Button onClick={onClickNftCount}>조회</Button>
      <Text>나무 민팅</Text>
      <Button onClick={onClickMintTree}>조회</Button>
    </Box>
  );
};

export default Home;
