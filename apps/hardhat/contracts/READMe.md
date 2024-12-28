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

```solidity
function createRandomZombie(string memory _name) public {
    require(ownerZombieCount[msg.sender] == 0)
    // or you can add a error message
    require(ownerZombieCount[msg.sender] == 0, "You already have a zombie")
    uint randDna = _generateRandomDna(_name);
    _createZombie(_name, randDna);
}
```
