const MyToken = artifacts.require("MyToken");

module.exports = function (deployer, network, accounts) {
  // @see https://trufflesuite.com/docs/truffle/getting-started/running-migrations/
  deployer.deploy(MyToken, accounts[0]);
};
