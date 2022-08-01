const { ethers } = require("hardhat");

const networkConfig = {
  31337: {
    // name: "hardhat",
    name: "localhost",
  },
  // 42: {
  //     name: "kovan",
  //     ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
  // },
};

const INITIAL_SUPPLY = "10000000000000000000000000";

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
  INITIAL_SUPPLY,
};
