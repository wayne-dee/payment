import { RefundTransactionHandler } from "./RefundTransaction";
import { BraintreeTransactionStatus } from "braintree-types";
import { transactionFactory } from "../test/factories/transactionFactory";

describe("RefundTransaction", () => {
  describe("success", () => {
    test("transitions from SETTLING to SUBMITTED_FOR_SETTLEMENT", async () => {
      const settlingTransaction = transactionFactory({
        status: BraintreeTransactionStatus.SETTLING
      });

      expect(await RefundTransactionHandler(settlingTransaction)).toEqual({
        transactionStatusEvent: {
          id: "txn-id",
          settlementTimestamp: expect.any(Date),
          status: "SUBMITTED_FOR_SETTLEMENT"
        }
      });
    });

    test("transitions from SETTLED to SUBMITTED_FOR_SETTLEMENT", async () => {
      const settledTransaction = transactionFactory({
        status: BraintreeTransactionStatus.SETTLED
      });

      expect(await RefundTransactionHandler(settledTransaction)).toEqual({
        transactionStatusEvent: {
          id: "txn-id",
          settlementTimestamp: expect.any(Date),
          status: "SUBMITTED_FOR_SETTLEMENT"
        }
      });
    });
  });
});
