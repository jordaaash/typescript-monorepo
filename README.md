# typescript-monorepo

This is a simple monorepo template with some specific design goals:

* Latest TypeScript version
* Fast, incremental dependency updates and builds
* No package bundler
* Watch mode works
* ESM and CJS work (with distinct build outputs)
* Vanilla TS and React packages work
* Create React App works (with hot module reloading of the entire workspace)

## Prerequisites

* Node 16+
* PNPM

If you have Node 16+, you can [activate PNPM with Corepack](https://pnpm.io/installation#using-corepack):
```shell
corepack enable
corepack prepare pnpm@`npm info pnpm --json | jq -r .version` --activate
```

Corepack requires a version to enable, so if you don't have [jq](https://stedolan.github.io/jq/) installed, you can [install it](https://formulae.brew.sh/formula/jq), or just manually get the current version of pnpm with `npm info pnpm` and use it like this:

```shell
corepack prepare pnpm@7.8.0 --activate
```

## Setup

```shell
git clone https://github.com/jordansexton/typescript-monorepo.git
cd typescript-monorepo
pnpm install
```

## Build

Run this to build all your workspace packages.

```shell
pnpm build
```

This will build workspace packages that use `tsc` for compilation first, then everything else.

## Watch

Run this to build and watch workspace packages that use `tsc` for compilation.

```shell
pnpm watch
```

Other packages can build and run with their own tools (like CRA's react-scripts commands).

## Run (with HMR)

Run this in a separate terminal from the `watch` command.

```shell
cd packages/app/create-react-app
pnpm start
```

A basic CRA app will now be running. Go change the file [`packages/core/base/src/helloWorld.ts`](./packages/core/base/src/helloWorld.ts). This file is used by the file [`packages/ui/react/src/HelloWorld.tsx`](./packages/ui/react/src/HelloWorld.tsx), which is used by the CRA app.

Change the string `'Hello, world!'` to some other string, and save the file. The CRA app should update automatically, reflecting this deeply nested change.
