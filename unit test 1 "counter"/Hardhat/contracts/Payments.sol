// SPDX-License-Identifier: MIT

 pragma solidity ^0.8.0;

 contract Counter {
    uint count = 0;
    address owner;
    constructor(){
        owner = msg.sender;
    }

    function increaseCount() external{
        require(msg.sender == owner);
        count++;
    }

 }