const MyFirstContract = artifacts.require("MyFirstContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyFirstContract", function (accounts) {
  it("add new person", async function () {
    const contract = await MyFirstContract.deployed();
    await contract.addPerson("Alex", "FromTest");
    const 
      peopleQty = await contract.peopleCount(),
      arrPerson = await contract.people(0),
      mapPerson = await contract.mapPeople(1);

    assert.equal(1, peopleQty);
    assert.equal(1, arrPerson.id);
    assert.equal("Alex", arrPerson.firstName);
    assert.equal("FromTest", arrPerson.lastName);
    assert.equal("Alex", mapPerson.firstName);
    assert.equal("FromTest", mapPerson.lastName);
  });

  it("not contract owner tries to add new person", async function () {
    const contract = await MyFirstContract.deployed();
    try {
      await contract
        .addPerson("Alex", "NotFromOwner", { "from": accounts[1] })
    } catch (error) {
      err = error;
    }

    assert.isTrue(err instanceof Error);
    assert.equal(
      "Returned error: VM Exception while processing transaction: revert Only the owner can perform this transaction -- Reason given: Only the owner can perform this transaction.",
      err.message
    );
  })
});
