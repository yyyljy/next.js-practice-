import { useEffect, useState } from "react";
import Web3 from "web3";
import { ELG_TREE_ABI, ELG_TREE_CONTRACT } from "../web3.config";

export const useWallet = () => {
  const [account, setAccount] = useState<string>("");

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
      } else {
        alert("Install MetaMask!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { account, getAccount };
};

export const useWeb3 = () => {
  const [web3, setWeb3] = useState<any>(undefined);
  const [elgTreeContract, setElgTreeContract] = useState<any>(undefined);

  useEffect(() => {
    if (window.ethereum) {
      setWeb3(new Web3(window.ethereum));
    }
  }, []);

  useEffect(() => {
    if (!web3) return;

    setElgTreeContract(new web3.eth.Contract(ELG_TREE_ABI, ELG_TREE_CONTRACT));
  }, [web3]);
  return { web3, elgTreeContract };
};
