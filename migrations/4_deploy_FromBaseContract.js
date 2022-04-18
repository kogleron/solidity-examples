const FromBaseContract = artifacts.require("FromBaseContract");

module.exports = function (deployer, network, accounts) {
  // @see https://trufflesuite.com/docs/truffle/getting-started/running-migrations/
  deployer.deploy(FromBaseContract, "old-name", "symba")
};
