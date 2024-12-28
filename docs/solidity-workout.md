# Solidity Workout

<summary>

1. Create (1) a fixed length of array with 2 uint elements, (2) a fixed array of string with a length of 5, (3) dynamic array of uint.

<details>

```solidity
// Array with a fixed length of 2 elements:
uint[2] fixedArray;
// another fixed Array, can contain 5 strings:
string[5] stringArray;
// a dynamic Array - has no fixed size, can keep growing:
uint[] dynamicArray;
```

`State variables` are stored permanently in the blockchain. So creating a dynamic array of structs like this can be useful for storing structured data in your contract, kind of like a database.

You can declare an array as public, and Solidity will automatically create a getter method for it. The syntax looks like:

`Person[] public people;`

Other contracts would then be able to read from, but not write to, this array. So this is a useful pattern for storing public data in your contract.

Examples of fixed and dynamic arrays. Solidity has 2 types of arrays, fixed and dynamic.

</details>

</summary>

2. Where is a state variable in a contract stored? What is `uint` in solidity?

<summary>

<details>
`State variables` are permanently stored in contract storage. They are written to the Ethereum blockchain. Hence, it works like storing value in the data base.

```solidity
contract Example {
  // This will be stored permanently in the blockchain
  uint myUnsignedInteger = 100;
}
```

In Solidity, uint is actually an alias for uint256, a 256-bit unsigned integer. You can declare uints with less bits — uint8, uint16, uint32, etc.. But in general you want to simply use uint except in specific cases.

</details>

</summary>
