# ava-multi-config-runner

VSC extension for debugging and running single AVA (<https://github.com/avajs/ava>) tests based on multiple configurations

## Why

This is based on the phenomenal VSC extension [ava-test-runner](https://github.com/jacekczapiewski/vscode-ava-test-runner) created by jacekczapiewski.  

I fell in love with it, became it's first reviewer with 5 stars, and in fact promoted it in two webinars on unit testing.  I still recommend it if you want a simple way to run tests.

But I have some very specific goals that require more configuration.  If you use AVA for both unit tests and integration tests, you probably want to be able to handle both.  I decided for various reasons to create a separate extension that allows what I need.

## Features

- Running all tests in the active editor
- Running single test using shortcut (test is automatically found using the cursor position)
- Running a single test using CodeLenses
- Debugging single test using CodeLenses

## Configuration

- `ava.directoryReplaceFrom`
- `ava.directoryReplaceTo`
- `ava.extensionReplaceFrom`
- `ava.extensionReplaceTo`

You may wonder why do we even need these properties. By default, they can be empty. It was added mainly to handle the case when tests are written using `TypeScript` without `ts-node`. The solution is to create a pretest task that compiles tests before running them. In such a case, those tests can be run using eg.

```typescript
{
    "ava.directoryReplaceFrom": "/tests",
    "ava.directoryReplaceTo": "/dist-tests",
    "ava.extensionReplaceFrom": ".ts",
    "ava.extensionReplaceTo": ".js"
}
```

Let's say that the path of the original test file is as follows: `/sth/tests/RandomTests.ts`. This file is compiled to `/sth/dist-tests/RandomTests.js`. Using those settings replaces the original path during tests run.
