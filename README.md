# Braintree Custom Actions Payment Method template

> Custom Actions is in an initial Preview phase. Contact functions-requests@braintreepayments.com to request access.

A quick start template for building a Payment Method with [Custom Actions](#what-is-custom-actions).

<details>
<summary><strong>Table of Contents</strong></summary>

- [Braintree Custom Actions Payment Method template](#braintree-custom-actions-payment-method-template)
  - [What is `Custom Actions`](#what-is-custom-actions)
  - [Requirements](#requirements)
  - [Development](#development)
    - [Install dependencies](#install-dependencies)
    - [Testing locally](#testing-locally)
  - [Testing](#testing)
  - [Deployment](#deployment)

</details>

## What is `Custom Actions`

Custom Actions is a serverless platform that opens the Braintree ecosystem to you and your developers by providing the capability to extend our built-in offerings. With Custom Actions, you can add new payment methods we don't currently accept, send transaction data to your accounting systems, run fraud tools from the vendor of your choice, or develop a custom workflow unique to your business.

- Read the [docs](https://developers.braintreepayments.com/guides/functions/overview)

## Requirements

- A [Braintree sandbox](https://www.braintreepayments.com/sandbox) account
- Node.js [v10.16](https://nodejs.org/en/download/releases/)
- Familiarity with [TypeScript](https://typescriptlang.org)/JavaScript

## Development

### Install dependencies

> We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions easily

```sh
nvm install && npm install
```

### Testing locally

Since your event handlers are executed within Braintree's environment, you don't need to worry about invoking them directly during development. Instead, making sure your code satisfies the expected interface(s) for each handler by running tests in `watch` mode, you can quickly wire up your functions without deploying to Braintree's sandbox.

```sh
npm run test:watch
```

This will rebuild your TypeScript files and run the tests as you make changes.

## Testing

```sh
npm t
```

To run in watch mode:

```sh
npm run test:watch
```

## Deployment

Deployment is currently a manual process specific to each Braintree sandbox account. Email functions-requests@braintreepayments.com for more information.
