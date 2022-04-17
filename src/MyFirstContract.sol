// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// My first contract.
// Stores some value on the blockchain.
// Allows to get the stored value.
// Allows to modify the stored value.
contract MyFirstContract {
    struct Person {
        uint256 id;
        string firstName;
        string lastName;
    }
    enum State {
        waiting,
        ready,
        active
    }
˝
    Person[] public people;
    mapping(uint256 => Person) public mapPeople;
    uint256 public peopleCount = 0;
    State public state;
    string public value; // will be stored on blockchain. It has the "storage" type.
    string public constant constValue = "some const"; // can not be modified.

    constructor() {
        value = "myValue";
        state = State.waiting;
    }

    function set(string calldata _value) public {
        value = _value;
    }

    function activate() public {
        state = State.active;
    }

    function addPerson(string memory _firstName, string memory _lastName)
        public
    {
        peopleCount++;
        mapPeople[peopleCount] = Person(peopleCount, _firstName, _lastName);
        people.push(mapPeople[peopleCount]);
    }
}
