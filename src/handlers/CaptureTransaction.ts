import {
  BraintreeTransaction,
  BraintreeEventHandlerResponse,
  BraintreeTransactionStatus
} from "braintree-types";

export const CaptureTransactionHandler = async (
  transaction: BraintreeTransaction
): Promise<BraintreeEventHandlerResponse> => {
  // Call out to third-party here

  return {
    transactionStatusEvent: {
      id: transaction.id,
      settlementTimestamp: new Date(),
      status: BraintreeTransactionStatus.SUBMITTED_FOR_SETTLEMENT
    }
  };
};
