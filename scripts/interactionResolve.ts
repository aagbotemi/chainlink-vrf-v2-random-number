import { ethers } from "hardhat";

async function interactionResolve() {

  const VRFv2Consumer = await ethers.getContractFactory("VRFv2Consumer");
  const vRFv2Consumer = VRFv2Consumer.attach("0x782eE638083C3d0cF036aC71c3A8F17DF0AE34FA");

  const resolve = await vRFv2Consumer.resolve("106280539088995096438324154226307539318479751885468070514715846789768232073043");
  console.log("This is the result of the resolve", resolve);

  // RANDOM NUMBER: [992876404, 1444101729, 1962138349, 3985556787, 2738091331, 2779030817, 3865473599, 1350417207,  437141226, 1528368465 ]
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
interactionResolve().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
