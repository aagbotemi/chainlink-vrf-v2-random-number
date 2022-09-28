import { ethers } from "hardhat";

async function interactionRequestId() {

  const VRFv2Consumer = await ethers.getContractFactory("VRFv2Consumer");
  const vRFv2Consumer = VRFv2Consumer.attach("0x782eE638083C3d0cF036aC71c3A8F17DF0AE34FA");
  
  const vRFv2ConsumerRequestRandomWords = await (await vRFv2Consumer.requestRandomWords()).wait();
  console.log("This is the result of the request random word:", vRFv2ConsumerRequestRandomWords);  

  const vRFv2ConsumerLastRequestId = await vRFv2Consumer.lastRequestId();
  console.log("This is the result of the request id:", vRFv2ConsumerLastRequestId);  
  // ID REQUESTED: 106280539088995096438324154226307539318479751885468070514715846789768232073043
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
interactionRequestId().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
