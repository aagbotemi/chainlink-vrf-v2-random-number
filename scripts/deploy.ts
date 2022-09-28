import { ethers } from "hardhat";
require("dotenv").config();

type PromiseOrValue = /*unresolved*/ any;

async function main() {

  const VRFv2Consumer = await ethers.getContractFactory("VRFv2Consumer");
  // @ts-ignore
  const vRFv2Consumer = await VRFv2Consumer.deploy(process.env.CHAINLINK_ID);
  await vRFv2Consumer.deployed();

  console.log(`VRFv2 Consumer address is: ${vRFv2Consumer.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
