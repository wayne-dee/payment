import { CaptureTransactionHandler } from "./CaptureTransaction";
import { BraintreeTransactionStatus } from "braintree-types";
import { transactionFactory } from "../test/factories/transactionFactory";

describe(" CaptureTransaction", () => {
  describe("success", () => {
    test("transitions from AUTHORIZED to SUBMITTED_FOR_SETTLEMENT", async () => {
      const fakeTransaction = transactionFactory({
        status: BraintreeTransactionStatus.AUTHORIZED
      });

      expect(await CaptureTransactionHandler(fakeTransaction)).toEqual({
        transactionStatusEvent: {
          id: "txn-id",
          settlementTimestamp: expect.any(Date),
          status: "SUBMITTED_FOR_SETTLEMENT"
        }
      });
    });
  });
});
