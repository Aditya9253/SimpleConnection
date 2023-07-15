// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract lottery{
  

    uint bal=0;

    function deposit_money(uint amt) public {
        bal+=amt;
    }
    function withdraw(uint amt) public {
        bal-=amt;
    }
    function getBalance() public view returns(uint){
        return bal;
    }

    
    
    // address manager;

    // address payable [] public  participants;


    // receive() external payable {
    //     require(msg.sender==manager);
    //     participants.push(payable(msg.sender));


    // }
    // function getBalance() public view returns(uint){
    //     return address(this).balance;

    // }
    // function random() public view returns(uint){
    //     return uint(keccak256(abi.encodePacked(block.prevrandao,block.timestamp,participants.length)));

    // }
    // function Winner() public {
    //     require(msg.sender==manager,"no other person have permission to select the winner");
    //     uint r= random();
    //     uint index=r % participants.length;

    //     address payable winner;
    //     winner=participants[index];

    //     winner.transfer(getBalance());

    // }

}