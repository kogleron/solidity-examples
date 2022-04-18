// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./Receiver.sol";

contract Sender {
    address public receiverAddress;

    constructor(address _receiverAddress) {
        receiverAddress = _receiverAddress;
    }

    function send(string calldata _message) public {
        Receiver _receiver = Receiver(address(receiverAddress));
        _receiver.store(_message);
    }
}
