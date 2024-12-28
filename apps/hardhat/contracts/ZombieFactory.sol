// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ZombieFactory {

  uint dnaDigits = 16;
  uint dnaModulus = 10 ** dnaDigits; // the modulo will make sure DNA has only 16 digits.

  event NewZombie(uint zombieId, string name, uint dna);

  struct Zombie {
    string name;
    uint dna;
  }

  Zombie[] public zombies;

  mapping (uint => address) public zombieToOwner;
  mapping (address => uint) public ownerZombieCount;


  function _createZombie(string memory _name, uint _dna) private {
   
    zombies.push(Zombie(_name, _dna));

    uint id = zombies.length;
    zombieToOwner[id] = msg.sender;
    ownerZombieCount[msg.sender]++;

    emit NewZombie(id, _name, _dna);
  }

  function _generateRandomDna(string memory _str) private view returns (uint) {
    uint rand = uint(keccak256(abi.encodePacked(_str)));
    return rand % dnaModulus; // this will ensure the DNA only has 16 digits.
  }
 
  function createRamdomZombie(string memory _name) public {

    require(ownerZombieCount[msg.sender] == 0, "You already have a zombie");
    
    uint randDna = _generateRandomDna(_name);
    _createZombie(_name, randDna);
  }
}

