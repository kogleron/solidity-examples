// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

library MyMath {
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0);

        return a / b;
    }
}
