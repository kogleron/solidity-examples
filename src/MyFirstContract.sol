// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// My first contract.
// Stores some value on the blockchain.
// Allows to get the stored value.
// Allows to modify the stored value.
contract MyFirstContract {
    enum State { waiting, ready, active}

    State public state;
    string public value; // will be stored on blockchain. It has the "storage" type.
    string public constant constValue = "some const"; // can not be modified.

    constructor(){
        value = "myValue";
        state = State.waiting;
    }

    function set(string calldata _value) public {
        value = _value;
    }

    function activate() public {
        state = State.active;
    }
}
