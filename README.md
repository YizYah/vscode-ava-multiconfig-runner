# ava-multi-config-runner

VSC extension for debugging and running single AVA (<https://github.com/avajs/ava>) tests based on multiple configurations.

## Why

The combination of a test runner and a debugger is phenomenal.  Unfortunately, many people find that with TS in particular it's hard to get VS Code and AVA to cooperate.  I want something with a zero learning curve--just click to launch from within your own code!

This is based on the phenomenal VSC extension [ava-test-runner](https://github.com/jacekczapiewski/vscode-ava-test-runner) created by jacekczapiewski.  

I fell in love with it, became it's first reviewer with 5 stars, and in fact promoted it in two webinars on unit testing.  I still recommend it if you want a simple way to run tests.

But I have some very specific goals that require more configuration.  If you use AVA for both unit tests and integration tests, you probably want to be able to handle both.  I decided for various reasons to create a separate extension that allows what I need.

## Features

It looks at the extension on a file. If it's `test.ts`, then it runs the npm script `test`.  If it's `int.ts` then it runs the `int-test` script.  The plan is to add a configuration that lets you provide your own combination of scripts and debuggers.

It also includes your .env file as an environment for testing.  That's particularly relevant in you've got an `.npmrc` file with an environmental variable.

You can:

- click on the CodeLenses `Run` to run current test
- click on the CodeLenses `Debug` to launch the debugger

## Configuration

To be added.
