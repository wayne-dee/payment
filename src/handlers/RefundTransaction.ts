import {
  BraintreeEventHandlerResponse,
  BraintreeTransactionStatus,
  BraintreeRefund
} from "braintree-types";

export const RefundTransactionHandler = async (
  transaction: BraintreeRefund
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
