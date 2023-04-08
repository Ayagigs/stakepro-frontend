import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Button,
  HStack,
  Input,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Alert,
  useToast,
} from "@chakra-ui/react";
import {
  connect,
  isMetaMaskInstalled,
  getProvider,
  getSigner,
} from "../connection/metamask";
import { formatEther, Contract, parseEther } from "ethers";
import ABI from "../abi/mint.json";

function StakeTonen() {
  const [account, setAccount] = useState("");
  const [myBalance, setMyBalance] = useState("");
  const [mintValue, setMintValue] = useState("");
  const [chainError, setChainError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    if (account) {
      getBalance(account);
      setChainError(null);
    }
  }, [account]);

  const checkMetamask = async () => {
    if (isMetaMaskInstalled) {
      if (window.ethereum.chainId === "0x61") {
        const userAccount = await connect();
        console.log(userAccount);
        setAccount(userAccount[0]);
      } else {
        setChainError("Change to Binance Smart Contract Testnet");
        throw new Error("Change to Binance Smart Contract Testnet");
      }
    } else {
      throw new Error("Install metamask");
    }
  };

  const getBalance = async (myAccount) => {
    const provider = getProvider();
    const balance = await provider.getBalance(myAccount);
    setMyBalance(formatEther(balance));
    return balance;
  };

  const venusSmartContract = async () => {
    const signer = await getSigner();
    // Create a contract
    const venusSmartContract = new Contract(
      "0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c",
      ABI,
      signer
    );
    return venusSmartContract;
  };

  const mint = async () => {
    let balance = await getBalance(account);
    balance = parseInt(balance) * 10 ** -18;

    if (balance < Number(mintValue)) {
      toast({
        position: "top-left",
        render: () => (
          <Box color="white" p={3} bg="red.500">
            Insufficient Balance!
          </Box>
        ),
      });
    }
    try {
      const smartContract = await venusSmartContract();
      const tx = await smartContract.mint({
        value: parseEther(mintValue),
      });
      const receipt = await tx.wait(1);
      if (receipt.status) {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="green.500">
              Transaction successful
            </Box>
          ),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const walletConnection = () => {
    try {
      checkMetamask();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          {chainError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Wrong Network!</AlertTitle>
              <AlertDescription>
                Please change to Binance Smart Contract testnet
              </AlertDescription>
            </Alert>
          )}
          <Text>Binance Venus Smart Contract.</Text>
          <Text>{account}</Text>
          <Text>{myBalance}</Text>
          <Button onClick={walletConnection} disabled={account}>
            {account ? "Connected" : "Connect Wallet"}
          </Button>

          <HStack spacing="20px">
            <Input
              value={mintValue}
              onChange={(e) => setMintValue(e.target.value)}
              placeholder="enter value to mint"
            ></Input>
            <Button onClick={mint}>Mint </Button>
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
}

export default StakeTonen;