import { HardhatUserConfig } from "hardhat/types"; // Corrected import
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;
