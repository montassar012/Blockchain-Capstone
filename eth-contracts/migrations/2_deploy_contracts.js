// migrating the appropriate contracts
//var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// migrating the appropriate contracts
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");



module.exports = async (deployer, network, accounts) =>  {

  let contractOwner = accounts[0];

  await deployer.deploy(Verifier,{from: contractOwner});
  await deployer.deploy(SolnSquareVerifier, Verifier.address, "MK_RealStateERC721Token", "MK_RS721",{from: contractOwner});
};

