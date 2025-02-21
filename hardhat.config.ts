import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

// Ensure Solidity Analyzer is disabled if causing issues
const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.22",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200 // Adjust as needed
            }
        }
    },
    // Optional: Disable Solidity Analyzer explicitly
    analyzer: {
        enabled: false // Disable the Solidity Analyzer
    },
    networks: {
        hardhat: {
            chainId: 1337
        }
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache"
    },
    mocha: {
        timeout: 20000
    }
};

export default config;
