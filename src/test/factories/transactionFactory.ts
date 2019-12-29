import {
  BraintreeTransaction,
  BraintreeTransactionStatus,
  BraintreeTransactionType
} from "braintree-types";

type Partial<T> = {
  [P in keyof T]?: T[P];
};

const rawTransaction: Readonly<BraintreeTransaction> = {
  id: "txn-id",
  amount: "115.06",
  billing: {
    countryCodeAlpha2: "US",
    firstName: "Alice",
    lastName: "User",
    locality: "Chicago",
    postalCode: "60654",
    region: "IL",
    streetAddress: "222 W Merchandise Mart Pl",
    extendedAddress: "Ste 800"
  },
  customer: {
    email: "user@testing.com",
    phone: "+13122231234",
    firstName: "Alice",
    lastName: "User"
  },
  currencyIsoCode: "USD",
  taxAmount: "0",
  type: BraintreeTransactionType.SALE,
  status: BraintreeTransactionStatus.AUTHORIZING,
  paymentMethodFields: [{ name: "Foo", value: "Bar", displayValue: "B**" }]
};

export const transactionFactory = (
  overrides?: Partial<BraintreeTransaction>
): BraintreeTransaction => {
  return {
    ...rawTransaction,
    billing: { ...rawTransaction.billing },
    customer: { ...rawTransaction.customer },
    ...overrides
  };
};
