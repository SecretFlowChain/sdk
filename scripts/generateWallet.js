import { createWallet } from "../src/utils/wallet.js"

const wallet = createWallet()

console.log("Public Key:", wallet.publicKey)
console.log("Secret Key:", wallet.secretKey)
