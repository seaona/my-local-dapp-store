// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract DappStore {
    uint256 public unlockTime;
    address payable public owner;
    mapping(uint256 => address) userToApp;

    event SuccessfullBuy(uint256 amount);

    modifier newApp(address to, uint256 id) {
        require(userToApp[id] != to, 'You already own this one.');
        _;
    }

    constructor() {
        owner = payable(msg.sender);
    }

    function buy(
        address to,
        uint256 price,
        uint256 productId
    ) public payable newApp(to, productId) {
        require(to.balance >= price, "You don't have enough coins");

        emit SuccessfullBuy(address(this).balance);

        owner.transfer(price);
    }
}
