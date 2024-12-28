// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract ZombieFactory {

  uint dnaDigits = 16;
  uint dnaModulus = 10 ** dnaDigits; // the modulo will make sure DNA has only 16 digits.

  struct Zombie {
    string name;
    uint dna;
  }

  Zombie[] public zombies;

  event NewZombie(uint zombieId, string name, uint dna);

  function _createZombie(string memory _name, uint _dna) private {
    zombies.push(Zombie(_name, _dna));
  }

  function _generateRandomDna(string memory _str) private view returns (uint) {
    uint rand = uint(keccak256(abi.encodePacked(_str)));
    return rand % dnaModulus; // this will ensure the DNA only has 16 digits.
  }
 
  function createRamdomZombie(string memory _name) public {
    uint randDna = _generateRandomDna(_name);
    // in the tutorial, it is uint id = zombies.push(Zombie(_name, _dna)) - 1; but won't work any. length is better
    // push function for dynamic array no longer returns the new length of the array after Solidity 0.6.0.
    zombies.push(Zombie(_name, randDna));
    uint id = zombies.length;
    emit NewZombie(id, _name, randDna);
  }
}

