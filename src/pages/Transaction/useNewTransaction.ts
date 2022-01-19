import * as Dapp from "@elrondnetwork/dapp";
import {
  Transaction,
  Address,
  TransactionPayload,
  Balance,
  ChainID,
  GasLimit,
} from "@elrondnetwork/erdjs";
import { gasLimit as configGasLimit, gasPerDataByte } from "config";
import { RawTransactionType } from "helpers/types";

export default function useNewTransaction() {
  const { chainId } = Dapp.useContext();

  return (rawTransaction: RawTransactionType) => {
    const gasLimit = rawTransaction.gasLimit
      ? new GasLimit(rawTransaction.gasLimit)
      : Dapp.calculateGasLimit({
          data: rawTransaction.data?.toString() || "",
          gasLimit: configGasLimit,
          gasPerDataByte,
        });

    return new Transaction({
      data: new TransactionPayload(rawTransaction.data?.toString()),
      chainID: new ChainID(chainId.valueOf()),
      gasLimit,
      receiver: new Address(rawTransaction.receiver),
      value: Balance.egld(rawTransaction.value),
    });
  };
}
