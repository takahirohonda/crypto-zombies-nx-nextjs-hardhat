/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ZombieFeeding,
  ZombieFeedingInterface,
} from "../../ZombieFeeding.sol/ZombieFeeding";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "zombieId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dna",
        type: "uint256",
      },
    ],
    name: "NewZombie",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createRamdomZombie",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetDna",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_species",
        type: "string",
      },
    ],
    name: "feedAndMultiply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_kittyId",
        type: "uint256",
      },
    ],
    name: "feedOnKitty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerZombieCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zombieToOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zombies",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dna",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526010600055600054600a6100189190610251565b6001557306012c8cf97bead5deae237070f9587f8e7a266d600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156100df57600080fd5b5061029c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561016b57808604811115610147576101466100e5565b5b60018516156101565780820291505b808102905061016485610114565b945061012b565b94509492505050565b6000826101845760019050610240565b816101925760009050610240565b81600181146101a857600281146101b2576101e1565b6001915050610240565b60ff8411156101c4576101c36100e5565b5b8360020a9150848211156101db576101da6100e5565b5b50610240565b5060208310610133831016604e8410600b84101617156102165782820a905083811115610211576102106100e5565b5b610240565b6102238484846001610121565b9250905081840481111561023a576102396100e5565b5b81810290505b9392505050565b6000819050919050565b600061025c82610247565b915061026783610247565b92506102947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610174565b905092915050565b6112a5806102ab6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806301afd7e11461006757806317a7f4cc146100975780632052465e146100b3578063528b7b8f146100e457806363a8977e146101145780636b0bfc8014610130575b600080fd5b610081600480360381019061007c9190610797565b61014c565b60405161008e91906107dd565b60405180910390f35b6100b160048036038101906100ac9190610824565b610164565b005b6100cd60048036038101906100c89190610864565b610282565b6040516100db929190610921565b60405180910390f35b6100fe60048036038101906100f99190610864565b61033e565b60405161010b9190610960565b60405180910390f35b61012e60048036038101906101299190610ab0565b610371565b005b61014a60048036038101906101459190610af9565b61040e565b005b60046020528060005260406000206000915090505481565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e98b7f4d836040518263ffffffff1660e01b81526004016101c191906107dd565b61014060405180830381865afa1580156101df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102039190610bb5565b9091929394959697985090919293949596975090919293949596509091929394955090919293945090919293509091925090915090508091505061027d83826040518060400160405280600581526020017f6b6974747900000000000000000000000000000000000000000000000000000081525061040e565b505050565b6002818154811061029257600080fd5b90600052602060002090600202016000915090508060000180546102b590610cc3565b80601f01602080910402602001604051908101604052809291908181526020018280546102e190610cc3565b801561032e5780601f106103035761010080835404028352916020019161032e565b820191906000526020600020905b81548152906001019060200180831161031157829003601f168201915b5050505050908060010154905082565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146103f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ea90610d40565b60405180910390fd5b60006103fe8261058d565b905061040a82826105d2565b5050565b6003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461047957600080fd5b60006002848154811061048f5761048e610d60565b5b90600052602060002090600202019050600154836104ad9190610dbe565b9250600060028483600101546104c39190610e1e565b6104cd9190610e52565b90506040516020016104de90610eda565b60405160208183030381529060405280519060200120836040516020016105059190610f20565b604051602081830303815290604052805190602001200361054757606360648261052f9190610dbe565b8261053a9190610f37565b6105449190610e1e565b90505b6105866040518060400160405280600681526020017f4e6f4e616d650000000000000000000000000000000000000000000000000000815250826105d2565b5050505050565b600080826040516020016105a19190610f20565b6040516020818303038152906040528051906020012060001c9050600154816105ca9190610dbe565b915050919050565b6002604051806040016040528084815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190816106279190611117565b5060208201518160010155505060006002805490509050336003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906106e0906111e9565b91905055507f88f026aacbbecc90c18411df4b1185fd8d9be2470f1962f192bf84a27d0704b781848460405161071893929190611231565b60405180910390a1505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061076482610739565b9050919050565b61077481610759565b811461077f57600080fd5b50565b6000813590506107918161076b565b92915050565b6000602082840312156107ad576107ac61072f565b5b60006107bb84828501610782565b91505092915050565b6000819050919050565b6107d7816107c4565b82525050565b60006020820190506107f260008301846107ce565b92915050565b610801816107c4565b811461080c57600080fd5b50565b60008135905061081e816107f8565b92915050565b6000806040838503121561083b5761083a61072f565b5b60006108498582860161080f565b925050602061085a8582860161080f565b9150509250929050565b60006020828403121561087a5761087961072f565b5b60006108888482850161080f565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156108cb5780820151818401526020810190506108b0565b60008484015250505050565b6000601f19601f8301169050919050565b60006108f382610891565b6108fd818561089c565b935061090d8185602086016108ad565b610916816108d7565b840191505092915050565b6000604082019050818103600083015261093b81856108e8565b905061094a60208301846107ce565b9392505050565b61095a81610759565b82525050565b60006020820190506109756000830184610951565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109bd826108d7565b810181811067ffffffffffffffff821117156109dc576109db610985565b5b80604052505050565b60006109ef610725565b90506109fb82826109b4565b919050565b600067ffffffffffffffff821115610a1b57610a1a610985565b5b610a24826108d7565b9050602081019050919050565b82818337600083830152505050565b6000610a53610a4e84610a00565b6109e5565b905082815260208101848484011115610a6f57610a6e610980565b5b610a7a848285610a31565b509392505050565b600082601f830112610a9757610a9661097b565b5b8135610aa7848260208601610a40565b91505092915050565b600060208284031215610ac657610ac561072f565b5b600082013567ffffffffffffffff811115610ae457610ae3610734565b5b610af084828501610a82565b91505092915050565b600080600060608486031215610b1257610b1161072f565b5b6000610b208682870161080f565b9350506020610b318682870161080f565b925050604084013567ffffffffffffffff811115610b5257610b51610734565b5b610b5e86828701610a82565b9150509250925092565b60008115159050919050565b610b7d81610b68565b8114610b8857600080fd5b50565b600081519050610b9a81610b74565b92915050565b600081519050610baf816107f8565b92915050565b6000806000806000806000806000806101408b8d031215610bd957610bd861072f565b5b6000610be78d828e01610b8b565b9a50506020610bf88d828e01610b8b565b9950506040610c098d828e01610ba0565b9850506060610c1a8d828e01610ba0565b9750506080610c2b8d828e01610ba0565b96505060a0610c3c8d828e01610ba0565b95505060c0610c4d8d828e01610ba0565b94505060e0610c5e8d828e01610ba0565b935050610100610c708d828e01610ba0565b925050610120610c828d828e01610ba0565b9150509295989b9194979a5092959850565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610cdb57607f821691505b602082108103610cee57610ced610c94565b5b50919050565b7f596f7520616c726561647920686176652061207a6f6d62696500000000000000600082015250565b6000610d2a60198361089c565b9150610d3582610cf4565b602082019050919050565b60006020820190508181036000830152610d5981610d1d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610dc9826107c4565b9150610dd4836107c4565b925082610de457610de3610d8f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e29826107c4565b9150610e34836107c4565b9250828201905080821115610e4c57610e4b610def565b5b92915050565b6000610e5d826107c4565b9150610e68836107c4565b925082610e7857610e77610d8f565b5b828204905092915050565b600081905092915050565b7f6b69747479000000000000000000000000000000000000000000000000000000600082015250565b6000610ec4600583610e83565b9150610ecf82610e8e565b600582019050919050565b6000610ee582610eb7565b9150819050919050565b6000610efa82610891565b610f048185610e83565b9350610f148185602086016108ad565b80840191505092915050565b6000610f2c8284610eef565b915081905092915050565b6000610f42826107c4565b9150610f4d836107c4565b9250828203905081811115610f6557610f64610def565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610fcd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610f90565b610fd78683610f90565b95508019841693508086168417925050509392505050565b6000819050919050565b600061101461100f61100a846107c4565b610fef565b6107c4565b9050919050565b6000819050919050565b61102e83610ff9565b61104261103a8261101b565b848454610f9d565b825550505050565b600090565b61105761104a565b611062818484611025565b505050565b5b818110156110865761107b60008261104f565b600181019050611068565b5050565b601f8211156110cb5761109c81610f6b565b6110a584610f80565b810160208510156110b4578190505b6110c86110c085610f80565b830182611067565b50505b505050565b600082821c905092915050565b60006110ee600019846008026110d0565b1980831691505092915050565b600061110783836110dd565b9150826002028217905092915050565b61112082610891565b67ffffffffffffffff81111561113957611138610985565b5b6111438254610cc3565b61114e82828561108a565b600060209050601f831160018114611181576000841561116f578287015190505b61117985826110fb565b8655506111e1565b601f19841661118f86610f6b565b60005b828110156111b757848901518255600182019150602085019450602081019050611192565b868310156111d457848901516111d0601f8916826110dd565b8355505b6001600288020188555050505b505050505050565b60006111f4826107c4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361122657611225610def565b5b600182019050919050565b600060608201905061124660008301866107ce565b818103602083015261125881856108e8565b905061126760408301846107ce565b94935050505056fea264697066735822122023c1304efe10fe7ba61651c842df94fb06d59ddf7f1803704049f8d10bc6e8dc64736f6c634300081c0033";

type ZombieFeedingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZombieFeedingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZombieFeeding__factory extends ContractFactory {
  constructor(...args: ZombieFeedingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ZombieFeeding & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ZombieFeeding__factory {
    return super.connect(runner) as ZombieFeeding__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZombieFeedingInterface {
    return new Interface(_abi) as ZombieFeedingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ZombieFeeding {
    return new Contract(address, _abi, runner) as unknown as ZombieFeeding;
  }
}
