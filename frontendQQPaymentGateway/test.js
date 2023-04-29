const bitcoin = require('bitcoinjs-lib');


// Generate a new random keypair
const keyPair = bitcoin.ECPair.makeRandom();

// Get the private key in WIF format
const privateKey = keyPair.toWIF();

// Get the public address
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

// Generate a random passphrase
const passphrase = Math.random().toString(36).substr(2, 10);

console.log('Private Key: ', privateKey);
console.log('Public Address: ', address);
console.log('Passphrase: ', passphrase);
