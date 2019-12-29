import {
  BraintreeTransaction,
  BraintreeEventHandlerResponse,
  BraintreeTransactionStatus
} from "braintree-types";

export const AuthorizeTransactionHandler = async (
  transaction: BraintreeTransaction
): Promise<BraintreeEventHandlerResponse> => {
  // Call out to third-party here

  return {
    transactionStatusEvent: {
      id: transaction.id,
      status: BraintreeTransactionStatus.AUTHORIZED
    }
  };
};
