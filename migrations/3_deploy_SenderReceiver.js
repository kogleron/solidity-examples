const Receiver = artifacts.require("Receiver");
const Sender = artifacts.require("Sender");

module.exports = function (deployer, network, accounts) {
  // @see https://trufflesuite.com/docs/truffle/getting-started/running-migrations/
  deployer.deploy(Receiver)
    .then(function () {
      return deployer.deploy(Sender, Receiver.address);
    });
};
