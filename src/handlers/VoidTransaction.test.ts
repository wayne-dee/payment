import { VoidTransactionHandler } from "./VoidTransaction";
import { BraintreeTransactionStatus } from "braintree-types";
import { transactionFactory } from "../test/factories/transactionFactory";

describe("VoidTransaction", () => {
  describe("success", () => {
    test("transitions from AUTHORIZED to VOIDED", async () => {
      const authorizedTransaction = transactionFactory({
        status: BraintreeTransactionStatus.AUTHORIZED
      });
      expect(await VoidTransactionHandler(authorizedTransaction))
        .toMatchInlineSnapshot(`
        Object {
          "transactionStatusEvent": Object {
            "id": "txn-id",
            "status": "VOIDED",
          },
        }
      `);
    });

    test("transitions from SUBMITTED_FOR_SETTLEMENT to VOIDED", async () => {
      const submittedForSettlementTransaction = transactionFactory({
        status: BraintreeTransactionStatus.SUBMITTED_FOR_SETTLEMENT
      });

      expect(await VoidTransactionHandler(submittedForSettlementTransaction))
        .toMatchInlineSnapshot(`
        Object {
          "transactionStatusEvent": Object {
            "id": "txn-id",
            "status": "VOIDED",
          },
        }
      `);
    });
  });
});
