# blockchain-Indiegogo

- solc compiler 0.4.25
- web3.js to interact with the ABI
- ganache testsuite
- mocha for testing
- `Next.js` for the `React` Multipage Server-side rendered client - https://nextjs.org/
  - sub modules: `next-routes` for dynamic routing

# set up

- Install `Metamask` chrome extension and create a wallet
- Since late 2018, `Metamask` introduced `privacy mode` as a default setting. To be able to make any action requiring `ether`, you will need to turn off `privacy mode` for now
- Any other wallet works too

- `npm install`

# To Run

- An instance of the `Smart Contract` has already been deployed on the `Rinkeby Test Network`
- To start the app:
  - `npm run dev`
  - go to `http://localhost:3000`

# To compile and deploy the contracts after any contract changes

- `node compile.js`
- `compile.js` will output the 2 compiled contracts in `./build` as `JSON`
- `node deploy.js`
- Update the address of the newly deployed contract in `factory.js`

# To test

- `npm run test`

## If error: cannot find module ../utils,

- remove package-lock.json
- `npm cache clean --force`
- `npm install`

### If error persists, reinstall `node 10.15 LTS` and retry the above commands
