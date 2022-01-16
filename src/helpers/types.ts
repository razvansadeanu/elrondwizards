import { TransactionPayload } from "@elrondnetwork/erdjs/out";

export interface RawTransactionType {
  value: string;
  receiver: string;
  gasPrice?: number;
  gasLimit?: number;
  data?: TransactionPayload;
  chainID?: string;
  version?: number;
  payload?: string;
}
