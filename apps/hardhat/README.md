## notes...

Counter contract test deploy to alchemy sepolia net

(node:33780) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
(Use `node --trace-warnings ...` to show where the warning was created)
checking deploymentReceipt: {"\_type":"TransactionReceipt","blockHash":"0x685fc630bfdde13a0a6fec978dae85e829eadc0ace1a8a47adb8df85806c97b6","blockNumber":7314538,"contractAddress":"0x0900d9792472bd60D195e9E69e37c7f80Fa0e624","cumulativeGasUsed":"7323902","from":"0xe5F77E21215451C4639127f1647B385adA33Cb20","gasPrice":"4791408211","blobGasUsed":null,"blobGasPrice":null,"gasUsed":"258330","hash":"0xd9fc0460ee4b4a2558047d367c237641905034df95ed4f87b73531ef31f9dbb7","index":47,"logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":1,"to":null}
counter contract deployed to: 0x0900d9792472bd60D195e9E69e37c7f80Fa0e624

## Simple ERC-721 Contract (using OpenZeppelin)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    string private baseURI;

    constructor(string memory _name, string memory _symbol, string memory _baseURI) ERC721(_name, _symbol) {
        baseURI = _baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mint(address to) external onlyOwner {
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    // Optionally allow owner to update base URI for metadata
    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseURI = _newBaseURI;
    }
}
```

For transfering ownership, OpenZeppelin's Ownable contract provide transferOwnershitp method.

```solidity
function transferOwnership(address newOwner) public onlyOwner;

// and execute this
MyNFT.transferOwnership(newOwnerAddress)

// safteTransferForm is better because it checks if the recipient can recieve NFTs.
function transferFrom(address from, address to, uint256 tokenId) external;
function safeTransferFrom(address from, address to, uint256 tokenId) external;
function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

```
