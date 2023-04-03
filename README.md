# TS-Jest Project Template

This is a project template for a TypeScript project with Jest testing framework. It is set up with `tsup` for bundling, `eslint` for linting, and `prettier` for code formatting.

## Installation

To install this project template, clone the repository and run the following command to install all dependencies:

```bash
pnpm i
```

## Scripts

This project template includes the following scripts:

- `dev`: runs `tsup` to bundle the source files and watch for changes.
- `test`: runs Jest to execute the tests.
- `build`: runs `tsup` to build the production-ready bundle.

## Dependencies

This project template includes the following dev dependencies:

- `@types/jest`: provides type definitions for Jest.
- `@types/node`: provides type definitions for Node.js.
- `@typescript-eslint/eslint-plugin`: provides additional ESLint rules for TypeScript.
- `@typescript-eslint/parser`: allows ESLint to understand TypeScript syntax.
- `eslint`: lints the code according to the configured rules.
- `eslint-config-prettier`: disables ESLint rules that conflict with Prettier.
- `jest`: the testing framework.
- `prettier`: formats the code according to the configured rules.
- `ts-jest`: allows Jest to work with TypeScript code.
- `tsup`: the bundler.
- `typescript`: the TypeScript compiler.

## Debug

Use [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) to Debug tests and other code.

## License

This project is licensed under the ISC License.
