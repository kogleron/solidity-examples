// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "../lib/MyMath.sol";

contract UseMathContract{
    uint256 value;

    function calculate(uint256 a, uint256 b) public{
        value = MyMath.div(a, b);
    }
}
