// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// My first contract.
// Stores some value on the blockchain.
// Allows to get the stored value.
// Allows to modify the stored value.
contract MyFirstContract {
    string value; // will be stored on blockchain. It has the "storage" type.

    constructor(){
        value = "myValue";
    }

    function get() public view returns (string memory) {
        return value;
    }

    function set(string calldata _value) public {
        value = _value;
    }
}
