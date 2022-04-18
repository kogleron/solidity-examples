// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Receiver{
    struct Message{
        address sender;
        address origin;
        string text;
    }
    Message[] public messages;

    function store(string calldata _message) public{
        messages.push(Message(msg.sender, tx.origin, _message));
    }
}
