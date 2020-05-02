require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember upset inflict private orange trip'; 
let testAccounts = [
"0x0e5e7d9cba5f475986a6b70eae2dbbec1146867c402ff04c4f95bfcae50c6720",
"0xf1e75de17651838de3aaa3d97f6fbdb47b80da4bc492a140f8849636bac8015b",
"0x4465c6b8881cdbebf370522baa1a441f247606a4956db60db84a5cf71aa0d793",
"0xfcd7c0565dd00e025205e48a4812c8eff31c5dcc30500be9a0b3474a4e2f2292",
"0x1546157e1b8e2753ff29827b638329780fe6a9c837f416f9fc626d1a580b0a0f",
"0xf407286d66b64621045b2330f0286c33afd80e69e2fb80e8d56953c2fa218e39",
"0x5558f2d4f293a02b238dd454256ad608d3526783340c64e1e1d67785472ebe70",
"0x2bf741ff50e74fce4e50dc2fa084fb02330cb3bb58495ba944f155866ec64dd0",
"0xb384c62dcae17163adac24e605806aea58dc0d75535338601bf4a42599f8a04f",
"0x55b793d90db64428023d2f0acb53e1eae405d39057665748aa8c22ecfe1bcb72"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
