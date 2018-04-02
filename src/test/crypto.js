const crypto = require('crypto');
const assert = require('assert');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(2048);
const aliceKey = alice.generateKeys();
console.log(alice);
console.log(alice.getPrime());
console.log(alice.getGenerator());
return;
// Generate Bob's keys...
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

// OK
// let ok = assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
// console.log(aliceSecret);
// console.log(bobSecret);
console.log(ok);