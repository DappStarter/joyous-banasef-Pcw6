require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy raise mad slow inflict clinic metal gasp'; 
let testAccounts = [
"0xb39fbeeaf6229b5b094b1c0b8fc58e13a0657e39a10c72f7e328bd2b9f6f53c6",
"0xdaaf4956f73a2780c9b28d16b387ec5cc44a97b0d4e1fb293d4eb1aa2019ddc0",
"0xbbca6f228df096cf66a7b241930b20586e1f4de6f0542b904f203087932a4678",
"0xefe7833ab168895581545c4813eb1dad27f1f8af47e1deae22ddef5562cad618",
"0xbe5be65e232c4b8ada14eca1ac0527f3e5a3c15290e97daa35aafd803410ee3a",
"0xe8b898068ffd77a6ea4614266dd6e1c146200438e5cefe88e50484880c50ceec",
"0xc6790ac25f90f95ec2082564e5e58090f73592a3da89d7bd2bfaae6551329631",
"0x29ceb2948c6d3d3c37e6e8b2be665c625068a1a6a46b34e0557ebabc2000493c",
"0x32ea5b94ee6b3d0b92511d5f879bbc97b5ab6f5b26c841edd34d9f675c59d304",
"0xd0d09d7aaed79133414569fdc09f85f755c43c998fa411905c4cdb665696db3c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

