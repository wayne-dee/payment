import { AuthorizeTransactionHandler } from "./AuthorizeTransaction";
import { transactionFactory } from "../test/factories/transactionFactory";

describe("AuthorizeTransaction", () => {
  describe("success", () => {
    test("transitions from AUTHORIZING to AUTHORIZED", async () => {
      const fakeTransaction = transactionFactory();

      expect(await AuthorizeTransactionHandler(fakeTransaction))
        .toMatchInlineSnapshot(`
        Object {
          "transactionStatusEvent": Object {
            "id": "txn-id",
            "status": "AUTHORIZED",
          },
        }
      `);
    });
  });
});
