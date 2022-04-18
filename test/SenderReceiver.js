const Receiver = artifacts.require("Receiver");
const Sender = artifacts.require("Sender");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Sender and Receiver", function (accounts) {
    it("call one contract from another contract", async function () {
        const
            receiver = await Receiver.deployed(),
            sender = await Sender.deployed();

        await sender.send("my-msg", { from: accounts[1] });

        const receivedMessage = await receiver.messages(0);
        assert.equal("my-msg", receivedMessage.text);
        assert.equal(sender.address, receivedMessage.sender);
        assert.equal(accounts[1], receivedMessage.origin);
    });
});
