import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

const address = "0xAf8d40f5d5Ec8054d8dEf099493F1Dc574EA680D";

const chain = EvmChain.ETHEREUM;

export const getResult = () => {
  return new Promise((resolve, reject) => {
    Moralis.start({
      apiKey:
        "GYpXVKCbJ7M3aePbWJMy2xMTuWHCybHQCz0uB9rx9mQLtzoSFgojZDKmDFTEqKiK",
    })
      .then(async (r) => {
        try {
          const response = await Moralis.EvmApi.nft.getWalletNFTs({
            address,
            chain,
            tokenAddresses: ["0x0D7cbFa90a214fc0D8EA692779626fC3dfEbBE08"],
          });

          resolve(response.result);
        } catch (e) {
          console.log("request error", e);
        }
      })
      .catch((e) => {
        console.log("moralis start error");
      });
  });
};
