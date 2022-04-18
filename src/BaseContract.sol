// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract BaseContract {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }

    function rename(string memory _name) public virtual {
        name = _name;
    }
}

contract FromBaseContract is BaseContract {
    string public symbol;
    mapping(string => address) public nameSetters;

    constructor(string memory _name, string memory _symbol)
        BaseContract(_name)
    {
        symbol = _symbol;
    }

    function rename(string memory _name) public override {
        nameSetters[_name] = msg.sender;

        super.rename(_name);
    }
}
