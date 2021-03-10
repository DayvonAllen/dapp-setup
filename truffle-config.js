const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
//account Mnemonic
const Mnemonic = "";
const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    // ganache_local: {
    //   provider: () => {
    //     return new HDWalletProvider(Mnemonic, "http://127.0.0.1:7545", AccountIndex);
    //   },
    //   network_id: 5777
    // }
  },
  compilers: {
    solc: {
      version: "0.7.4",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  }
};
