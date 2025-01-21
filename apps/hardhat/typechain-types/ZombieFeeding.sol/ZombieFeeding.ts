/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ZombieFeedingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createRamdomZombie"
      | "feedAndMultiply"
      | "feedOnKitty"
      | "ownerZombieCount"
      | "zombieToOwner"
      | "zombies"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "NewZombie"): EventFragment;

  encodeFunctionData(
    functionFragment: "createRamdomZombie",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "feedAndMultiply",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "feedOnKitty",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerZombieCount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "zombieToOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "zombies",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createRamdomZombie",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feedAndMultiply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feedOnKitty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerZombieCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zombieToOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zombies", data: BytesLike): Result;
}

export namespace NewZombieEvent {
  export type InputTuple = [
    zombieId: BigNumberish,
    name: string,
    dna: BigNumberish
  ];
  export type OutputTuple = [zombieId: bigint, name: string, dna: bigint];
  export interface OutputObject {
    zombieId: bigint;
    name: string;
    dna: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZombieFeeding extends BaseContract {
  connect(runner?: ContractRunner | null): ZombieFeeding;
  waitForDeployment(): Promise<this>;

  interface: ZombieFeedingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createRamdomZombie: TypedContractMethod<
    [_name: string],
    [void],
    "nonpayable"
  >;

  feedAndMultiply: TypedContractMethod<
    [_zombieId: BigNumberish, _targetDna: BigNumberish, _species: string],
    [void],
    "nonpayable"
  >;

  feedOnKitty: TypedContractMethod<
    [_zombieId: BigNumberish, _kittyId: BigNumberish],
    [void],
    "nonpayable"
  >;

  ownerZombieCount: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  zombieToOwner: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  zombies: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { name: string; dna: bigint }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createRamdomZombie"
  ): TypedContractMethod<[_name: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "feedAndMultiply"
  ): TypedContractMethod<
    [_zombieId: BigNumberish, _targetDna: BigNumberish, _species: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "feedOnKitty"
  ): TypedContractMethod<
    [_zombieId: BigNumberish, _kittyId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ownerZombieCount"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "zombieToOwner"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "zombies"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { name: string; dna: bigint }],
    "view"
  >;

  getEvent(
    key: "NewZombie"
  ): TypedContractEvent<
    NewZombieEvent.InputTuple,
    NewZombieEvent.OutputTuple,
    NewZombieEvent.OutputObject
  >;

  filters: {
    "NewZombie(uint256,string,uint256)": TypedContractEvent<
      NewZombieEvent.InputTuple,
      NewZombieEvent.OutputTuple,
      NewZombieEvent.OutputObject
    >;
    NewZombie: TypedContractEvent<
      NewZombieEvent.InputTuple,
      NewZombieEvent.OutputTuple,
      NewZombieEvent.OutputObject
    >;
  };
}
