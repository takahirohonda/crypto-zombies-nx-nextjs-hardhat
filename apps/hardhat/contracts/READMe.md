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

# Chapter 10 & 11: Interacting with other contracts

To interact with another contract on the blockchain, we first need to define an interface.

For example, this contract exists on the chain.

```solidity
contract LuckyNumber {
  mapping(address => uint) numbers;

  function setNum(uint _num) public {
    numbers[msg.sender] = _num;
  }

  function getNum(address _myAddress) public view returns (uint) {
    return numbers[_myAddress];
  }
}
```

Then, we define an interface of the contract.

- If there is no curly braces, the compiler knows it is an interface.
- Define only the function we want to interact with and don't mention any of the other function or state variables.

```solidity
contract NumberInterface {
  function getNum(address _myAddress) public view returns (uint);
}
```

Once the interface is defined, we can use the contract address to get the contract instance and call the function.

```solidity
contract MyContract {
  address NumberInterfaceAddress = 0xab38...
  // ^ The address of the FavoriteNumber contract on Ethereum
  NumberInterface numberContract = NumberInterface(NumberInterfaceAddress);
  // Now `numberContract` is pointing to the other contract

  function someFunction() public {
    // Now we can call `getNum` from that contract:
    uint num = numberContract.getNum(msg.sender);
    // ...and do something with `num` here
  }
}
```

# Chapter 12 Multiple Returns

```solidity
function multipleReturns() internal returns(uint a, uint b, uint c) {
  return (1, 2, 3);
}

function processMultipleReturns() external {
  uint a;
  uint b;
  uint c;
  // This is how you do multiple assignment:
  (a, b, c) = multipleReturns();
}

// Or if we only cared about one of the values:
function getLastReturnValue() external {
  uint c;
  // We can just leave the other fields blank:
  (,,c) = multipleReturns();
}
```

# Chapter 13

Replace the last 2 digits of DNA with 99.

`newDna = newDna - newDna % 100 + 99;`

# Frontend code example

```js
var abi = /* abi generated by the compiler */
var ZombieFeedingContract = web3.eth.contract(abi)
var contractAddress = /* our contract address on Ethereum after deploying */
var ZombieFeeding = ZombieFeedingContract.at(contractAddress)

// Assuming we have our zombie's ID and the kitty ID we want to attack
let zombieId = 1;
let kittyId = 1;

// To get the CryptoKitty's image, we need to query their web API. This
// information isn't stored on the blockchain, just their webserver.
// If everything was stored on a blockchain, we wouldn't have to worry
// about the server going down, them changing their API, or the company
// blocking us from loading their assets if they don't like our zombie game ;)
let apiUrl = "https://api.cryptokitties.co/kitties/" + kittyId
$.get(apiUrl, function(data) {
  let imgUrl = data.image_url
  // do something to display the image
})

// When the user clicks on a kitty:
$(".kittyImage").click(function(e) {
  // Call our contract's `feedOnKitty` method
  ZombieFeeding.feedOnKitty(zombieId, kittyId)
})

// Listen for a NewZombie event from our contract so we can display it:
ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  // This function will display the zombie, like in lesson 1:
  generateZombie(result.zombieId, result.name, result.dna)
})
```
