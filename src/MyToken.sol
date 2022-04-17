// https://eips.ethereum.org/EIPS/eip-20
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Example of transfering ether on function call.
contract MyToken{
    mapping(address => uint256) public balances;
    address payable wallet;

    constructor(address payable _wallet){
        wallet = _wallet;
    }

    function buyToken() public payable{
        // buy a token
        balances[msg.sender] += 1;
        // send ether to the wallet
        wallet.transfer(msg.value);
    }
}
