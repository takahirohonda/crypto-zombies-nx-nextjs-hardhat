# Error

```bash
ContractFunctionExecutionError: The contract function "getZombieBySender" returned no data ("0x").

This could be due to any of the following:
  - The contract does not have the function "getZombieBySender",
  - The parameters passed to the contract function may be invalid, or
  - The address is not a contract.

Contract Call:
  address:   0x5FbDB2315678afecb367f032d93F642f64180aa3
  function:  getZombieBySender()

Docs: https://viem.sh/docs/contract/readContract
Version: viem@2.21.55
    at getContractError (getContractError.js:34:12)
    at readContract (readContract.js:67:98)Caused by: ContractFunctionZeroDataError: The contract function "getZombieBySender" returned no data ("0x").

This could be due to any of the following:
  - The contract does not have the function "getZombieBySender",
  - The parameters passed to the contract function may be invalid, or
  - The address is not a contract.

Version: viem@2.21.55
    at eval (getContractError.js:22:20)
    at getContractError (getContractError.js:33:7)
    at readContract (readContract.js:67:98)
```

Local contract deployed

checking deploymentReceipt: {"\_type":"TransactionReceipt","blockHash":"0x8a16daf62bea630e81b10ba5a7e1202a089e95badf2ff061723c81aeea69eb47","blockNumber":1,"contractAddress":"0x5FbDB2315678afecb367f032d93F642f64180aa3","cumulativeGasUsed":"1100562","from":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","gasPrice":"1875000000","blobGasUsed":null,"blobGasPrice":null,"gasUsed":"1100562","hash":"0x59d74ba8ea2b2eb27206b5edacd651147b26a6170e6500d0d17131ae035405e6","index":0,"logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":1,"to":null}
zombieFactory contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
