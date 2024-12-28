# Notes from current lesson...

In progress...

## Chapter 3

## Mapping

Like structs and arrays, Mappings are another way of storing organized data in Solidity.

```solidity
// For a financial app, storing a uint that holds the user's account balance:
mapping (address => uint) public accountBalance;
// Or could be used to store / lookup usernames based on userId
mapping (uint => string) userIdToName;
```

## msg.sender

`msg.sender` is a global variable that refers to the address of the person or contract who called the current function.

```solidity
mapping (address => uint) favoriteNumber;

function setMyNumber(uint _myNumber) public {
  // Update our `favoriteNumber` mapping to store `_myNumber` under `msg.sender`
  favoriteNumber[msg.sender] = _myNumber;
  // ^ The syntax for storing data in a mapping is just like with arrays
}

function whatIsMyNumber() public view returns (uint) {
  // Retrieve the value stored in the sender's address
  // Will be `0` if the sender hasn't called `setMyNumber` yet
  return favoriteNumber[msg.sender];
}
```

# Chapter 4

Make sure that the user can only create zombie one by using `require`

```solidity
function createRandomZombie(string memory _name) public {
    // start here
    uint randDna = _generateRandomDna(_name);
    _createZombie(_name, randDna);
}
```

**Answer**

`require` makes it so that the function will throw an error and stop executing if some condition is not true:

```solidity
function createRandomZombie(string memory _name) public {
    require(ownerZombieCount[msg.sender] == 0)
    // or you can add a error message
    require(ownerZombieCount[msg.sender] == 0, "You already have a zombie")
    uint randDna = _generateRandomDna(_name);
    _createZombie(_name, randDna);
}
```

# Chapter 5 - Inheritance

BabyDoge inherits from Doge. That means if you compile and deploy BabyDoge, it will have access to both catchphrase() and anotherCatchphrase() (and any other public functions we may define on Doge).

```solidity
contract Doge {
  function catchphrase() public returns (string memory) {
    return "So Wow CryptoDoge";
  }
}

contract BabyDoge is Doge {
  function anotherCatchphrase() public returns (string memory) {
    return "Such Moon BabyDoge";
  }
}
```

# Chapter 7 - Storage vs Memory (Data storage location)

In Solidity, there are two locations you can store variables — in `storage` and in `memory`.

- `Storage`: refers to variables stored permanently on the blockchain.
- `Memory`: variables are temporary, and are erased between external function calls to your contract.

Most of the time you don't need to use these keywords because Solidity handles them by default.

- State variables (variables declared outside of functions) are by default storage and written permanently to the blockchain
- Variables declared inside functions are memory and will disappear when the function call ends.

However, we need to explicitly tell Solidity when we have `structs` and `array` in the function.

```solidity
contract SandwichFactory {
  struct Sandwich {
    string name;
    string status;
  }

  Sandwich[] sandwiches;

  function eatSandwich(uint _index) public {
    // Sandwich mySandwich = sandwiches[_index];

    // ^ Seems pretty straightforward, but solidity will give you a warning
    // telling you that you should explicitly declare `storage` or `memory` here.

    // So instead, you should declare with the `storage` keyword, like:
    Sandwich storage mySandwich = sandwiches[_index];
    // ...in which case `mySandwich` is a pointer to `sandwiches[_index]`
    // in storage, and...
    mySandwich.status = "Eaten!";
    // ...this will permanently change `sandwiches[_index]` on the blockchain.

    // If you just want a copy, you can use `memory`:
    Sandwich memory anotherSandwich = sandwiches[_index + 1];
    // ...in which case `anotherSandwich` will simply be a copy of the
    // data in memory, and...
    anotherSandwich.status = "Eaten!";
    // ...will just modify the temporary variable and have no effect
    // on `sandwiches[_index + 1]`. But you can do this:
    sandwiches[_index + 1] = anotherSandwich;
    // ...if you want to copy the changes back into blockchain storage.
  }
}
```
