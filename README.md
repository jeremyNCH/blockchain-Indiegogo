# blockchain-lottery

- solc compiler 0.4.25
- web3.js to interact with the ABI
- ganache testsuite
- mocha for testing

# set up

- Install `Metamask` chrome extension and create a wallet
- Since late 2018, `Metamask` introduced `privacy mode` as a default setting. To be able to `enter` in the lottery, you will need to turn off `privacy mode`.

- `npm install`
- `node compile.js`

# To test

- `npm run test`

## If error: cannot find module ../utils,

- remove package-lock.json
- `npm cache clean --force`
- `npm install`

### If error persists, reinstall `node 10.15 LTS` and retry the above commands
