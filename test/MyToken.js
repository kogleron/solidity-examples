const MyToken = artifacts.require("MyToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyToken", function (accounts) {
  it("buyToken increases balance and transfer token", async function () {
    const transactionValue = web3.utils.toWei("2", "ether");
    contract = await MyToken.deployed();
    const etherBalance0Before = await web3.eth.getBalance(accounts[0]);
    const etherBalance1Before = await web3.eth.getBalance(accounts[1]);

    const receipt = await contract.buyToken({ from: accounts[1], value: transactionValue })

    const balance = await contract.balances(accounts[1])
    const etherBalance0After = await web3.eth.getBalance(accounts[0]);
    const etherBalance1After = await web3.eth.getBalance(accounts[1]);
    const tx = await web3.eth.getTransaction(receipt.tx);
    const gasUsed = web3.utils.toBN(receipt.receipt.gasUsed);
    const gasPrice = web3.utils.toBN(tx.gasPrice);

    assert.equal(1, balance);
    assert.equal(
      transactionValue,
      web3.utils.toBN(etherBalance0After)
        .sub(web3.utils.toBN(etherBalance0Before)).toString()
    );
    assert.equal(
      transactionValue,
      web3.utils.toBN(etherBalance1Before)
        .sub(web3.utils.toBN(etherBalance1After))
        .sub(gasPrice.mul(gasUsed))
        .toString()
    );
  });
});
