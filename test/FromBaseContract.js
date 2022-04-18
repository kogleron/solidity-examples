const BaseContract = artifacts.require("BaseContract");
const FromBaseContract = artifacts.require("FromBaseContract");

/*
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("FromBaseContract", function (accounts) {
  it("inheritance", async function () {
    const fromContract = await FromBaseContract.deployed();

    await fromContract.rename("new", { from: accounts[0] });

    assert.equal("symba", await fromContract.symbol());
    assert.equal("new", await fromContract.name());
    assert.equal(accounts[0], await fromContract.nameSetters("new"));
  });
});
